/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Core palette ──────────────────────────────────────────────────
        // #f06543  coral-orange  → primary CTA / active / highlights
        // #f09d51  warm amber    → secondary hover / tags / badges
        // #e8e9eb  silver        → light surfaces / dark-mode text
        // #e0dfd5  warm sand     → light page background
        // #313638  charcoal      → dark page background / light-mode text

        // ── Named raw tokens ─────────────────────────────────────────────
        coral:     "#f06543",
        amber:     "#f09d51",
        silver:    "#e8e9eb",
        sand:      "#e0dfd5",
        charcoal:  "#313638",

        // ── Primary: coral-orange (#f06543) ───────────────────────────────
        primary: {
          50:  "#fff2ee",
          100: "#ffe1d8",
          200: "#ffc3b0",
          300: "#ff9d82",
          400: "#f67c5e",
          500: "#f06543",   // ← base
          600: "#d14930",
          700: "#aa3824",
          800: "#842b1b",
          900: "#612012",
        },

        // ── Secondary: warm amber (#f09d51) ──────────────────────────────
        secondary: {
          50:  "#fff8ee",
          100: "#fdefd6",
          200: "#fad9a8",
          300: "#f7bf77",
          400: "#f4ac5e",
          500: "#f09d51",   // ← base
          600: "#d07c32",
          700: "#aa6024",
          800: "#844a1b",
          900: "#613614",
        },

        // ── Accent: shared warm mid-tone for borders/tags ────────────────
        accent: {
          50:  "#faf6f3",
          100: "#f2ebe4",
          200: "#e0dfd5",   // sand ← light bg
          300: "#ccc9be",
          400: "#b5b2a8",
          500: "#9a9790",
          600: "#7e7b75",
          700: "#63615c",
          800: "#4b4946",
          900: "#333230",
        },

        // ── Neutral grays (warm undertone) ───────────────────────────────
        gray: {
          50:  "#f5f5f3",
          100: "#e8e9eb",   // silver ← light surface
          200: "#d4d4d2",
          300: "#b8b8b6",
          400: "#929190",
          500: "#706f6e",
          600: "#5a5958",
          700: "#474645",
          800: "#3c3b3a",
          850: "#353434",
          900: "#313638",   // charcoal ← dark bg
          950: "#1e2022",   // near-black
        },
      },

      // ── Animations ───────────────────────────────────────────────────────
      animation: {
        "mesh-drift": "meshDrift 28s ease infinite alternate",
        "orb-float":  "orbFloat 9s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "gradient-x": "gradientX 15s ease infinite",
      },

      keyframes: {
        meshDrift: {
          "0%":   { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%":      { transform: "translateY(-18px) scale(1.04)" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientX: {
          "0%, 100%": { backgroundSize: "200% 200%", backgroundPosition: "left center" },
          "50%":      { backgroundSize: "200% 200%", backgroundPosition: "right center" },
        },
      },

      fontFamily: {
        sans: ["Electrolize", "system-ui", "sans-serif"],
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [],
};
