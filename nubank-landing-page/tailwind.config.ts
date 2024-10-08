import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../assets/images/bg-hero-02.png')",
      },
      colors: {
        "primary-purple": "#2D0A47",
        "primary-black": "#161616",
        "primary-gray": "#33303E",
        "second-gray": "#4E4B59",
        "gray-phone": "#F4F4F4",
        "text-gray": "#7A7786",
        "opacity-gray": "rgba(100, 80, 57, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
