/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: "#242424",
        secondary: "#e8c36e",
        accent: "#26329f",
        light: "#fcfcfc",
        purple: "#271d69"
      }
    },
  },
  plugins: [],
}

