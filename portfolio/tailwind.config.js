/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // PRIMARY: Neon Mint Green — intense glow accent
        primary: {
          50: "#ebfef5",
          100: "#d0fce7",
          200: "#a3f8d4",
          300: "#6edbae",
          400: "#34d399",
          500: "#20fc8f", // Neon mint (dark mode glow)
          600: "#0d8a4d", // Readable mint (light mode)
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },

        // SECONDARY: Deep forest teal
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },

        // ACCENT: Pale mint / highlight
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#6edbae",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },

        // MESH: Fluid teal-green accents placed behind glass
        mesh: {
          light: "#84a19d",  // muted mid-teal for light mode
          dark: "#3f5e5a",   // deep teal for dark mode glow layers
        },

        // GRAY: Organic olive-grey — the core surface palette
        // Standard grays (50–700) come from Tailwind defaults
        // We override the dark-end to be warm olive-grey instead of cold black
        gray: {
          800: "#38423b", // Dark olive border
          850: "#353831", // Dark surface (cards)
          900: "#2d2d2a", // Dark base (section bg)
          950: "#1c1d1a", // Near-black olive (deepest bg)
        },
      },

      // ── Custom Box Shadows for Volumetric Thick Glass ────────────────────
      boxShadow: {
        // Dark mode — stacked inset highlights + deep drop shadow
        "glass": [
          "inset 0px 1.5px 2px rgba(255,255,255,0.18)",
          "inset 0px 0px 0px 1px rgba(255,255,255,0.06)",
          "0px 16px 48px rgba(0,0,0,0.45)",
        ].join(", "),

        // Dark mode hover — adds neon mint glow
        "glass-glow": [
          "inset 0px 1.5px 2px rgba(255,255,255,0.22)",
          "inset 0px 0px 0px 1px rgba(32,252,143,0.15)",
          "0px 16px 48px rgba(0,0,0,0.50)",
          "0px 0px 60px rgba(32,252,143,0.12)",
        ].join(", "),

        // Light mode — bright top-edge highlight + soft drop shadow
        "glass-light": [
          "inset 0px 2px 3px rgba(255,255,255,0.92)",
          "inset 0px 0px 0px 1px rgba(255,255,255,0.55)",
          "0px 8px 32px rgba(0,0,0,0.08)",
        ].join(", "),

        // Light mode hover — subtle green tint
        "glass-light-glow": [
          "inset 0px 2px 3px rgba(255,255,255,0.95)",
          "inset 0px 0px 0px 1px rgba(13,138,77,0.18)",
          "0px 8px 40px rgba(0,0,0,0.12)",
          "0px 0px 40px rgba(13,138,77,0.07)",
        ].join(", "),

        // Nav bar variant — thinner, horizontal
        "glass-nav": [
          "inset 0px 1px 1px rgba(255,255,255,0.15)",
          "inset 0px 0px 0px 1px rgba(255,255,255,0.05)",
          "0px 8px 32px rgba(0,0,0,0.4)",
        ].join(", "),
      },

      // ── Animations ───────────────────────────────────────────────────────
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "glass-pulse": "glassPulse 4s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        glassPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },

      fontFamily: {
        sans: ["Electrolize", "system-ui", "sans-serif"],
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
