/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "max-w-90%" : "90%"
      },
      colors:{
        "colorFund": "#272323"
      }
    },
  },
  plugins: [],
}

