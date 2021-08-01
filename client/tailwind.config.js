module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto:'roboto'
      },
      inset: {
        '-111': '-9%'
      },
      backgroundImage: theme => ({
        'mountains': 'url("./img/Flat-Mountains.svg")'
      }),
      height: {
        'nobar': '99vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
