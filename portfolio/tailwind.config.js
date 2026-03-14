/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ─── Pastel mesh palette (raw tokens) ─────────────────────────────
        pastel: {
          peach:  "#eddcd2",
          cream:  "#fff1e6",
          blush:  "#fde2e4",
          rose:   "#fad2e1",
          teal:   "#c5dedd",
          sage:   "#dbe7e4",
          ivory:  "#f0efeb",
          sky:    "#d6e2e9",
          steel:  "#bcd4e6",
          slate:  "#99c1de",
        },

        // ─── Primary: steel-blue family (interactive, links, highlights) ──
        primary: {
          50:  "#f4f9fd",
          100: "#e6f2f8",
          200: "#d6e2e9",   // sky
          300: "#bcd4e6",   // steel
          400: "#99c1de",   // slate
          500: "#7aafc8",   // mid tone
          600: "#5e96b0",   // deeper, text-safe
          700: "#4a7d96",
          800: "#3a6478",
          900: "#2c4e5e",
        },

        // ─── Secondary: warm pastel family (rose / peach) ─────────────────
        secondary: {
          50:  "#fffaf8",
          100: "#fff1e6",   // cream
          200: "#eddcd2",   // peach
          300: "#fde2e4",   // blush
          400: "#fad2e1",   // rose ← dark-mode glow orb
          500: "#f0c4d0",
          600: "#d4a0b4",
          700: "#b87c98",
          800: "#9c5878",
          900: "#7a3858",
        },

        // ─── Accent: teal / sage family (borders, tags, success) ──────────
        accent: {
          50:  "#f2fbfb",
          100: "#e0f4f2",
          200: "#dbe7e4",   // sage
          300: "#c5dedd",   // teal ← dark-mode glow orb
          400: "#a8d0ce",
          500: "#8bc2c0",
          600: "#6eb4b2",
          700: "#52a0a0",
          800: "#3e8888",
          900: "#2c7070",
        },

        // ─── Neutral grays (dark backgrounds) ─────────────────────────────
        gray: {
          850: "#171717",
          900: "#111111",
          950: "#000000",   // pure black for dark mode
        },
      },

      // ─── Animations ───────────────────────────────────────────────────────
      animation: {
        "mesh-drift":  "meshDrift 25s ease infinite alternate",
        "orb-float":   "orbFloat 9s ease-in-out infinite",
        "fade-in-up":  "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "gradient-x":  "gradientX 15s ease infinite",
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
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },
      },

      fontFamily: {
        sans: ["Electrolize", "system-ui", "sans-serif"],
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
      },

      backgroundImage: {
        "mesh-light":
          "radial-gradient(at 5%   8%,  rgba(188,212,230,0.70) 0px, transparent 55%)," +
          "radial-gradient(at 92%  4%,  rgba(197,222,221,0.60) 0px, transparent 48%)," +
          "radial-gradient(at 45% 96%,  rgba(250,210,225,0.45) 0px, transparent 52%)," +
          "radial-gradient(at 80% 55%,  rgba(153,193,222,0.35) 0px, transparent 42%)",
        "mesh-dark":
          "radial-gradient(ellipse at 12% 18%, rgba(250,210,225,0.13) 0px, transparent 50%)," +
          "radial-gradient(ellipse at 88% 78%, rgba(197,222,221,0.09) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
