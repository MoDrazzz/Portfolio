/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
  darkMode: "class",
};
