import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Zap,
  Smartphone,
  Globe,
  Star,
  Eye,
  Leaf,
  Shield,
  Cpu,
} from "lucide-react";
import pis from "../assets/pis.png";
import foodapp from "../assets/foodapp.png";
import floods from "../assets/floods.png";
import dssat from "../assets/dssat.png";
import risd from "../assets/risd.png";
import riceg from "../assets/riceg.png";
import LiquidGlassCard, { useDarkMode } from "./LiquidGlassCard";

// Inline GitHub mark — avoids lucide-react deprecated icon
const GithubSVG = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Projects = () => {
  const isDark = useDarkMode();

  const projects = [
    {
      title: "RIS Control Dashboard (ESP32)",
      description:
        "An embedded web server hosted entirely on an ESP32 to control Reconfigurable Intelligent Surfaces (RIS). Features a responsive UI served via SPIFFS, real-time pattern visualization using WebSockets, and secure Wi-Fi provisioning for seamless hardware-software integration.",
      image: risd,
      tech: ["ESP32", "C++", "WebSocket", "HTML/CSS", "SPIFFS"],
      github: "https://github.com/Dheeraj101097",
      live: "#",
      icon: <Cpu className="w-6 h-6" />,
      category: "IoT",
      featured: false,
    },
    {
      title: "Post-Quantum Crypto Benchmarking",
      description:
        "A comparative benchmarking framework evaluating NIST PQC standards (ML-DSA vs. FN-DSA) on resource-constrained ESP32 devices. Measured computational latency, energy efficiency, to guide the secure migration of IoT infrastructure.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["C", "Python", "ESP32", "liboqs", "Cryptography", "FreeRTOS"],
      github: "https://github.com/Dheeraj101097",
      live: "#",
      icon: <Shield className="w-6 h-6" />,
      category: "Security",
      featured: false,
    },
    {
      title: "Predictive Irrigation System",
      description:
        "IoT-based smart irrigation system with real-time monitoring, Edge AI, and LoRa integration, achieving 97% model accuracy to optimize water usage and crop yield through automated, data-driven pump control.",
      image: pis,
      tech: ["React", "Node.js", "ESP32", "MQTT", "MongoDB", "WebSocket"],
      github: "https://github.com/Dheeraj101097/Irrigo-codefinity.git",
      live: "https://irrigo-codefinity.vercel.app/",
      icon: <Smartphone className="w-6 h-6" />,
      category: "IoT",
      featured: false,
    },
    {
      title: "Soybean Yield Prediction Framework",
      description:
        "A hybrid research framework combining the DSSAT-Pythia crop simulation model with a CNN-LSTM deep learning network. Calibrated using remote sensing and NASA POWER weather data to generate high-resolution yield estimates for Bundelkhand, India, achieving 98% prediction accuracy (R²).",
      image: dssat,
      tech: ["Python", "DSSAT", "Pythia", "Remote Sensing"],
      github: "https://github.com/Dheeraj101097",
      live: "#",
      icon: <Leaf className="w-6 h-6" />,
      category: "ML/AI",
      featured: false,
    },
    {
      title: "FloodSense - Flood Monitoring System",
      description:
        "FloodSense is a patented IoT-based system using Jetson Nano for edge processing. It monitors underpasses in real-time, detects floods & potholes, sends alerts via Firebase, providing alternate route suggestions using MapBox API to enhance commuter safety.",
      image: floods,
      tech: ["Python", "PyQt5", "OpenCV", "Matplotlib"],
      github: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      live: " https://flood-monitoring-system.vercel.app/",
      icon: <Zap className="w-6 h-6" />,
      category: "IoT",
      featured: false,
    },
    {
      title: "Rice Grain Length Analysis System",
      description:
        "A Python-based desktop application with OpenCV for accurate rice grain length analysis and classification, achieving over 95% accuracy using image processing techniques like thresholding, edge detection, and contour analysis, with a user-friendly GUI for quality assessment.",
      image: riceg,
      tech: ["Python", "PyQt5", "OpenCV", "Matplotlib"],
      github: "https://github.com/Dheeraj101097/ricelengthdetector.git",
      live: "https://rice-length-detector.vercel.app/",
      icon: <Globe className="w-6 h-6" />,
      category: "Web",
      featured: false,
    },
    {
      title: "FoodZone - AI Recipe App",
      description:
        "A full-stack, AI-enhanced recipe management web app with secure user authentication, React Router-based navigation, full CRUD functionality for 150+ users, and optimized performance with Google AI integration for faster, more accurate recipe searches.",
      image: foodapp,
      tech: ["React", "Express.js", "MongoDB", "Node.js"],
      github: "https://github.com/Dheeraj101097/khanabanao.git",
      live: "https://foodzone-woad.vercel.app",
      icon: <Globe className="w-6 h-6" />,
      category: "Web",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden transition-colors duration-500
        bg-[#e6e8e3] dark:bg-gray-950"
    >
      {/* ── Fluid mesh blobs behind glass ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.25, 1], opacity: [0.25, 0.42, 0.25] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 right-10 w-[28rem] h-[28rem] rounded-full"
          style={{
            background: isDark
              ? "radial-gradient(circle, #20fc8f 0%, #0d8a4d 45%, transparent 70%)"
              : "radial-gradient(circle, #84a19d 0%, #3f5e5a 45%, transparent 70%)",
            filter: "blur(72px)",
          }}
        />
        <motion.div
          animate={{ rotate: [360, 0], scale: [1.1, 1, 1.1], opacity: [0.20, 0.34, 0.20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 -left-10 w-[36rem] h-[36rem] rounded-full"
          style={{
            background: isDark
              ? "radial-gradient(circle, #3f5e5a 0%, #1b765c 40%, transparent 70%)"
              : "radial-gradient(circle, #c2c7c0 0%, #84a19d 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-gradient-x">
            Featured Projects
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}
          >
            A showcase of my recent work spanning web development, IoT systems, and embedded electronics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <LiquidGlassCard radius="rounded-[1.75rem]" className="h-full flex flex-col">
                {/* Featured badge */}
                {project.featured && (
                  <div
                    className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                    style={{
                      background: isDark
                        ? "linear-gradient(135deg, rgba(32,252,143,0.2), rgba(20,184,166,0.2))"
                        : "linear-gradient(135deg, rgba(13,138,77,0.15), rgba(15,118,110,0.15))",
                      border: isDark
                        ? "1px solid rgba(32,252,143,0.3)"
                        : "1px solid rgba(13,138,77,0.3)",
                      color: isDark ? "#20fc8f" : "#0d8a4d",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden rounded-t-[1.6rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4"
                    style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      href={project.github}
                      className="p-3 rounded-full backdrop-blur-sm"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "#ffffff",
                      }}
                    >
                      <GithubSVG size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      href={project.live}
                      className="p-3 rounded-full backdrop-blur-sm"
                      style={{
                        background: isDark ? "rgba(32,252,143,0.2)" : "rgba(13,138,77,0.2)",
                        border: isDark
                          ? "1px solid rgba(32,252,143,0.4)"
                          : "1px solid rgba(13,138,77,0.4)",
                        color: isDark ? "#20fc8f" : "#0d8a4d",
                      }}
                    >
                      <Eye size={18} />
                    </motion.a>
                  </div>

                  {/* Floating icon pill */}
                  <div
                    className="absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-sm"
                    style={{
                      background: isDark ? "rgba(45,45,42,0.7)" : "rgba(245,246,244,0.75)",
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "1px solid rgba(255,255,255,0.6)",
                      color: isDark ? "#20fc8f" : "#0d8a4d",
                    }}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Category + links row */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                      style={{
                        background: isDark ? "rgba(32,252,143,0.08)" : "rgba(13,138,77,0.08)",
                        border: isDark
                          ? "1px solid rgba(32,252,143,0.2)"
                          : "1px solid rgba(13,138,77,0.2)",
                        color: isDark ? "#20fc8f" : "#0d8a4d",
                        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1)",
                      }}
                    >
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.92 }}
                        href={project.github}
                        className="p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                        style={{
                          background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.55)",
                          border: isDark
                            ? "1px solid rgba(255,255,255,0.09)"
                            : "1px solid rgba(255,255,255,0.65)",
                          color: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)",
                        }}
                      >
                        <GithubSVG size={14} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.92 }}
                        href={project.live}
                        className="p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                        style={{
                          background: isDark ? "rgba(32,252,143,0.08)" : "rgba(13,138,77,0.08)",
                          border: isDark
                            ? "1px solid rgba(32,252,143,0.2)"
                            : "1px solid rgba(13,138,77,0.2)",
                          color: isDark ? "#20fc8f" : "#0d8a4d",
                        }}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold mb-2 leading-snug"
                    style={{ color: isDark ? "#ffffff" : "#111827" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs leading-relaxed mb-4 flex-1"
                    style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.58)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.06 }}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium backdrop-blur-sm cursor-default"
                        style={{
                          background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.55)",
                          border: isDark
                            ? "1px solid rgba(255,255,255,0.09)"
                            : "1px solid rgba(255,255,255,0.65)",
                          color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.58)",
                          boxShadow: isDark
                            ? "inset 0 0.5px 1px rgba(255,255,255,0.07)"
                            : "inset 0 1.5px 2px rgba(255,255,255,0.85)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
