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
        primary: "#e11d48",
        // Dark mode variations
        textDark: "#f4f4f5",
        backgroundDark: "#030302",
      },
      animation: {
        blob: "blob 8s infinite",
        oval: "oval 20s infinite",
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
        oval: {
          "0%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
          "30%": {
            transform: "translate(50px, -60px) scale(1.1) rotate(45deg)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9) rotate(-45deg)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
