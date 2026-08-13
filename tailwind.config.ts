import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0C10",
        slate: "#12141C",
        gold: {
          DEFAULT: "#C5A059",
          bright: "#D4AF37",
          dim: "#8A6F3D",
        },
        emerald: {
          deep: "#0F382C",
        },
        crimson: {
          DEFAULT: "#8B0000",
        },
        offwhite: "#EAEAEA",
        muted: "#9DA3A4",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "vignette":
          "radial-gradient(120% 120% at 50% 0%, rgba(197,160,89,0.08) 0%, rgba(11,12,16,0) 45%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(197,160,89,0.35)",
        "gold-lg": "0 20px 60px -20px rgba(197,160,89,0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
