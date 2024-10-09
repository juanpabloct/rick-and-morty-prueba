import { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary100: "#EEE3FF",
        primary600: "#8054C7",
        primary700: "#5A3696",
        secondary600: "#63D838"
      },
      colors: {
        primary: "#111827",
        secondary: "#6B7280"
      }
    },
  },
  plugins: [],
};

export default config;
