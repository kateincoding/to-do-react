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
        'primary': '#9E83B8',
        'secondary': '#CCBBDB',
        'terciary': '#EBE5D9',
        'quaternary': '#758976',
        'default': '#AF8A89',
      }),
      textColor: theme => ({
        'primary': '#9E83B8',
        'secondary': '#5f6e60',
        'terciary': '#758976',
      }),
      // fontFamily:{
      //   Montserrat: ['Montserrat', 'sans-serif'],
      // }
    },
  },
  plugins: [],
}

