import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8eef5",
          100: "#c5d3e8",
          200: "#9eb5d9",
          300: "#7797ca",
          400: "#5980be",
          500: "#3c69b3",
          600: "#2d5a9e",
          700: "#1e4785",
          800: "#12366b",
          900: "#0A2540",
          950: "#061828",
        },
        green: {
          accent: "#00C853",
          light: "#69F0AE",
          dark: "#00892e",
        },
        risk: {
          critical: "#EF4444",
          medium: "#F97316",
          safe: "#22C55E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-satoshi)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0A2540 0%, #1e4785 100%)",
        "gradient-hero": "linear-gradient(135deg, #061828 0%, #0A2540 50%, #122d54 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        "card-hover": "0 20px 60px rgba(0,200,83,0.15)",
        "navy": "0 4px 24px rgba(10,37,64,0.3)",
        "glow-green": "0 0 30px rgba(0,200,83,0.3)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
