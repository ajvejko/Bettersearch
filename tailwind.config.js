/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bebas: "'Bebas Neue', serif",
        inter: "'Inter', serif",
      },
      colors: {
        textLight: "#010304",
        backgroundLight: "#ffffff",
        primaryLight: "#532813",
        secondaryLight: "#d7d7da",
        accentLight: "#bd2e46",
        // Dark mode variations
        textDark: "#f4f4f5",
        backgroundDark: "#030302",
        primaryDark: "#532813",
        secondaryDark: "#0c0c0d",
        accentDark: "#e79da9",
      },
      animation: {
        blob: "blob 8s infinite",
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
