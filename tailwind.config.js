/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: "'Bebas Neue', serif",
        inter: "'Inter', serif",
      },
      colors: {
        text: "#010304",
        background: "#ffffff",
        primary: "#532813",
        secondary: "#d7d7da",
        accent: "#bd2e46",
        // Dark mode vartions
        textDark: "#f4f4f5",
        backgroundDark: "#070709",
        primaryDark: "#532813",
        secondaryDark: "#0c0c0d",
        accentDark: "#e79da9",
      },
      animation: {
        blob: "blob 3s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "30%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
