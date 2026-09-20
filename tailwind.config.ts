import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111315",
        pearl: "#f3f1ec",
        blush: "#b9b8b2",
        wine: "#ff4d19",
        brass: "#ffb000",
        mist: "#deddd8"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(17, 19, 21, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
