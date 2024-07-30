/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': 'rgb(124 58 237)',
        'secondary': '#aa92e8',
        'terciary': '#EBE5D9',
        'quaternary': '#CCBBDB',
        'default': '#AF8A89',
      }),
      textColor: theme => ({
        'primary': 'rgb(124 58 237)',
        'secondary': 'rgb(124 58 237)',
        'terciary': '#758976',
      }),
      // fontFamily:{
      //   Montserrat: ['Montserrat', 'sans-serif'],
      // }
    },
  },
  plugins: [],
}

