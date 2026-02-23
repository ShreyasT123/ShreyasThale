import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        oswald: ["var(--font-oswald)", "sans-serif"], // Used for the big OceanOfPDF
      },
      colors: {
        // Precise orange from the design
        'orange': '#FF4500',
        'blue': '#4ce1f5',
      }
    },
  },
  plugins: [],
};
export default config;