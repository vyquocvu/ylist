/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#797979",
          "200": "#212121",
          "300": "#121212",
          "400": "rgba(255, 255, 255, 0.5)",
          "500": "rgba(18, 18, 18, 0.64)",
          "600": "rgba(255, 255, 255, 0.72)",
        },
        white: "#fff",
        dimgray: "#4d4d4d",
        forestgreen: "#1db954",
      },
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        "21xl": "40px",
        "3xs": "10px",
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      xs: "12px",
      xl: "20px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
