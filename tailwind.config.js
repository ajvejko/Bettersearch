/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ontFamily: {
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
    },
  },
  plugins: [],
};
