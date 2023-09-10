/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-100": "#1c1c1c",
        "white-80": "rgba(255, 255, 255, 0.8)",
        "primary-light": "#f7f9fb",
        "black-20": "rgba(0, 0, 0, 0.2)",
        "white-100": "#fff",
        "black-10": "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        regular: "Inter",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: "class",
  plugins: [nextui()],
};
