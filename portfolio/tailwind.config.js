// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         // 1. PRIMARY: Deep "Solder Mask" Blue
//         primary: {
//           50: "#eff6ff",
//           100: "#dbeafe",
//           200: "#bfdbfe",
//           300: "#93c5fd",
//           400: "#60a5fa",
//           500: "#3b82f6", // Standard Blue
//           600: "#2563eb", // Deep Link Blue
//           700: "#1d4ed8",
//           800: "#1e40af",
//           900: "#1e3a8a", // Dark PCB Blue
//         },

//         // 2. SECONDARY: "Copper" & "Warning Light" Amber
//         secondary: {
//           50: "#fffbeb",
//           100: "#fef3c7",
//           200: "#fde68a",
//           300: "#fcd34d",
//           400: "#fbbf24",
//           500: "#f59e0b", // Bright Copper
//           600: "#d97706", // Dark Copper (Text compatible)
//           700: "#b45309",
//           800: "#92400e",
//           900: "#78350f",
//         },

//         // 3. ACCENT: "Oscilloscope" Cyan
//         accent: {
//           50: "#ecfeff",
//           100: "#cffafe",
//           200: "#a5f3fc",
//           300: "#67e8f9",
//           400: "#22d3ee", // Electric Cyan
//           500: "#06b6d4",
//           600: "#0891b2",
//           700: "#0e7490",
//           800: "#155e75",
//           900: "#164e63",
//         },

//         // 4. NEUTRAL: "Heat Sink" Slate
//         // Note: Using 'extend' keeps standard grays (50-800) available
//         gray: {
//           850: "#1f2937", // Custom Dark Background
//           900: "#111827", // Deepest Black
//           950: "#0b0f19", // Almost OLED Black (Used for main background)
//         },
//       },
//       animation: {
//         "fade-in": "fadeIn 0.5s ease-in-out",
//         "slide-up": "slideUp 0.5s ease-out",
//         "bounce-slow": "bounce 3s infinite",
//         "gradient-x": "gradient-x 15s ease infinite",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         slideUp: {
//           "0%": { transform: "translateY(100%)", opacity: "0" },
//           "100%": { transform: "translateY(0)", opacity: "1" },
//         },

//         "gradient-x": {
//           "0%, 100%": {
//             "background-size": "200% 200%",
//             "background-position": "left center",
//           },
//           "50%": {
//             "background-size": "200% 200%",
//             "background-position": "right center",
//           },
//         },
//       },
//       fontFamily: {
//         sans: ["Electrolize", "system-ui", "sans-serif"],
//       },
//       spacing: {
//         18: "4.5rem",
//         88: "22rem",
//       },
//     },
//   },
//   plugins: [],
// };

// abv is amber green blue
// below pcb colors
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 1. PRIMARY: The main vibrant green (#1ec988)
        primary: {
          50: "#ebfef5",
          100: "#d0fce7",
          200: "#a3f8d4",
          300: "#6edbae", // Lighter shade from palette
          400: "#34d399",
          500: "#1ec988", // The main vibrant green
          600: "#059669",
          700: "#047857",
          800: "#1b765c", // Darker shade from palette
          900: "#064e3b",
        },

        // 2. SECONDARY: A deeper, more forest green (#1b765c)
        // Use for: Hover effects, less dominant elements
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#1b765c", // Deep Teal-Green
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },

        // 3. ACCENT: A bright, pale mint green (#6edbae)
        // Use for: Highlights, glows, borders
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#6edbae", // Pale Mint Green
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },

        // 4. NEUTRAL: Dark Circuit Board Background (#1c2c22)
        // gray: {
        //   850: "#1f2937",
        //   900: "#1c2c22", // Custom Circuit Board Dark
        //   950: "#15231b", // Even Darker for contrast
        // },
        gray: {
          850: "#171717", // Neutral dark gray for cards
          900: "#0a0a0a", // Deep neutral black
          950: "#030712", // True deep black background
        },
      },

      // ANIMATIONS
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "gradient-x": "gradient-x 15s ease infinite",
      },

      // KEYFRAMES
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
