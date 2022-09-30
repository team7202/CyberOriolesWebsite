/** @type {import('tailwindcss').Config} */
module.exports = {
  lightMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": {min: "320px", max: "640px"},
      "md": {min: "641px", max: "1007px"},
      "lg": {min: "1008px"}
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}