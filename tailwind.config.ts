import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111822",
        pearl: "#f4f6f8",
        blush: "#a9b6c4",
        wine: "#175c9e",
        brass: "#24a7d9",
        mist: "#dbe4ed"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 24, 34, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
