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
        primary: "#ede0d4",
        secondary: "#7f5539",
        accent: "#9c6644",
        light: "#fcfcfc",
      }
    },
  },
  plugins: [],
}

