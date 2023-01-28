const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "552px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        dark: {
          primary: "#222222",
          secondary: "#FFFFFF",
          gray: "#555555",
        },
        light: {
          primary: "#FFFFFF",
          secondary: "#222222",
          gray: "#999999",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
