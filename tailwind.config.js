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
      },
      spacing : {
        '6.6vh' : '6.6vh',
        '50vh' : '50vh',
        '50vw' : '50vw'
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
          '.rotate45-and-translate-8' : {
            transform : 'rotate(45deg) translate(-8px, 8px);'
          }
      }
      addUtilities(newUtilities)
    }
  ],
}

