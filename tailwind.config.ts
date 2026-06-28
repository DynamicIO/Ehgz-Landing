import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#080808",
          2: "#0f0f0f",
          3: "#161616",
          4: "#1e1e1e",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96B",
          dark: "#9A7A2F",
        },
        amber: "#D48B3A",
        sand: "#C4875A",
        white: {
          DEFAULT: "#FAFAF8",
          muted: "#B8B0A0",
        },
        cream: "#F5EDD8",
        border: "rgba(201,168,76,0.18)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #E8C96B 0%, #C9A84C 50%, #D48B3A 100%)",
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "28px",
      },
    },
  },
  plugins: [],
};
export default config;
