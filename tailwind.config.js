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
        'primary': '#7920bc',
        'secondary': '#FFD700',
        'terciary': '#FFD700',
      }),
      textColor: theme => ({
        'primary': '#7920bc',
        'secondary': '#FFD700',
        'terciary': '#FFD700',
      }),
      // fontFamily:{
      //   Montserrat: ['Montserrat', 'sans-serif'],
      // }
    },
  },
  plugins: [],
}

