module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: 'roboto'
      },
      inset: {
        '-111': '-9%'
      },
      backgroundImage: theme => ({
        'mountains': 'url("../img/Flat-Mountains.svg")'
      }),
      height: {
        'nobar': '99vh'
      }
    },
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
