import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        powder: "#CEEFF4",
        bordeaux: "#007198",
        ink: "#007198",
        blush: "#F8FBF1",
        line: "#82CEF9",
        accent: "#82CEF9",
        leaf: "#0594D0",
        sky: "#5CAFE7",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 16px 42px -26px rgba(0, 113, 152, 0.22)",
        soft: "0 8px 24px -16px rgba(0, 113, 152, 0.2)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
