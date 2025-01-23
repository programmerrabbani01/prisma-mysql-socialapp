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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Exo2: ["var(--font-exo2)", "sans-serif"],
        FiraCode: ["var(--font-firaCode)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
