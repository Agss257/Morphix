/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1200px",
      },
    },

    extend: {
      colors: {
        brand: {
          cyan: "#22d3ee",
          green: "#4ade80",
          dark: "#0f172a",
          light: "#1e293b",
        },
      },

      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        slideUp: "slideUp 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
