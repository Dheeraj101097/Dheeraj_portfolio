import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3245;

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not found in .env file");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// SSR Setup
let vite;

if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  app.use(vite.middlewares);
} else {
  app.use(
    express.static(path.resolve(__dirname, "dist/client"), { index: false })
  );
}

// SSR handler for all non-API routes
app.use(async (req, res, next) => {
  if (req.originalUrl.startsWith("/api/")) return next();

  try {
    const url = req.originalUrl;
    let template, render;

    if (!isProduction) {
      template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = fs.readFileSync(
        path.resolve(__dirname, "dist/client/index.html"),
        "utf-8"
      );
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const { html: appHtml } = await render();
    const html = template.replace("<!--ssr-outlet-->", appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e) {
    if (!isProduction && vite) vite.ssrFixStacktrace(e);
    console.error(e);
    res.status(500).end(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 SSR Server running on http://localhost:${PORT}`);
});
