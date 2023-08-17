/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        comic:`Comic Neue, cursive;`,
      }
    },
  },
  plugins: [require('daisyui')],
}
