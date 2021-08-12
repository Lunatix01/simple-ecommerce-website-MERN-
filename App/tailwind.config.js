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
        'mountains': 'url("../public/Flat-Mountains.svg")',
        'shape': 'url("../public/simple.svg")',
        'ok':'linear-gradient(112.5deg, rgba(79,70,229, 0.57) 0%, rgba(79,70,229, 0.57) 10%,rgba(79,70,229, 0.09) 10%, rgba(79,70,229, 0.09) 53%,rgba(176,176,176, 0) 53%, rgba(176,176,176, 0) 55%,rgba(157,157,157, 0) 55%, rgba(157,157,157, 0) 60%,rgba(137,137,137, 0) 60%, rgba(137,137,137, 0) 88%,rgba(79,70,229, 0.09) 88%, rgba(79,70,229, 0.09) 91%,rgba(79,70,229, 0.09) 91%, rgba(79,70,229, 0.09) 100%),linear-gradient(157.5deg, rgba(79,70,229, 0.57) 0%, rgba(79,70,229, 0.57) 10%,rgba(79,70,229, 0.09) 10%, rgba(79,70,229, 0.09) 53%,rgba(176,176,176, 0) 53%, rgba(176,176,176, 0) 55%,rgba(157,157,157, 0) 55%, rgba(157,157,157, 0) 60%,rgba(137,137,137, 0) 60%, rgba(137,137,137, 0) 88%,rgba(79,70,229, 0.09) 88%, rgba(79,70,229, 0.09) 91%,rgba(79,70,229, 0.09) 91%, rgba(79,70,229, 0.09) 100%),linear-gradient(135deg, rgba(79,70,229, 0.57) 0%, rgba(79,70,229, 0.57) 10%,rgba(79,70,229, 0.09) 10%, rgba(79,70,229, 0.09) 53%,rgba(176,176,176, 0) 53%, rgba(176,176,176, 0) 55%,rgba(157,157,157, 0) 55%, rgba(157,157,157, 0) 60%,rgba(137,137,137, 0) 60%, rgba(137,137,137, 0) 88%,rgba(79,70,229, 0.09) 88%, rgba(79,70,229, 0.09) 91%,rgba(79,70,229, 0.09) 91%, rgba(79,70,229, 0.09) 100%),linear-gradient(90deg, rgba(79,70,229, 0.09),rgba(79,70,229, 0.09)); background-blend-mode:overlay,overlay,overlay,normal;'
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
