/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './public/index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'], // Ejemplo con Open Sans
        // Puedes añadir más fuentes aquí
      },
    },
  },
  plugins: [],
}

