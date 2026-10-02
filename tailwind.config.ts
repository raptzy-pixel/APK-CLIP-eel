import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-orbitron)", "Arial", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 35px rgba(109, 40, 217, .28)",
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(135deg,#08a5ff 0%,#7c3aed 52%,#ec20ff 100%)",
      },
    },
  },
  plugins: [],
};

export default config;