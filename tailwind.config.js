/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-20": "rgba(255, 255, 255, 0.2)",
        "white-5": "rgba(255, 255, 255, 0.05)",
        "black-5": "rgba(0, 0, 0, 0.05)",
        "black-100": "#1c1c1c",
        "white-80": "rgba(255, 255, 255, 0.8)",
        "primary-light": "#f7f9fb",
        "black-20": "rgba(0, 0, 0, 0.2)",
        "secondary-purple-b": "#c6c7f8",
        "white-100": "#fff",
        "black-10": "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        regular: "Inter",
      },
      borderRadius: {
        "xs-1": "11.1px",
        "7xs-6": "5.6px",
        "10xs-8": "2.8px",
        "4xs-4": "8.4px",
      },
    },
    fontSize: {
      "3xs-7": "9.7px",
      "smi-5": "12.5px",
      "4xs-4": "8.4px",
      "14xl-4": "33.4px",
      sm: "14px",
      xs: "12px",
      lg: "18px",
      "29xl": "48px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
