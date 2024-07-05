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
      colors: {
        primary: '#03aeef', // azul claro
        'primary-dark': '#0296d4', // azul claro oscuro
        'primary-light': '#5ccfff', // azul claro más claro
        secondary: '#ff6347', // tomate
        'secondary-dark': '#cc4f3a', // tomate oscuro
        'secondary-light': '#ff7f6e', // tomate claro
        accent: '#ffc107', // ámbar
        'accent-dark': '#cc9a06', // ámbar oscuro
        'accent-light': '#ffca28', // ámbar claro
        neutral: '#f5f5f5', // gris claro
        'neutral-dark': '#e0e0e0', // gris
        'neutral-light': '#fafafa', // gris más claro
        // Colores adicionales derivados del azul claro
        'complementary': '#ef5a03', // un color complementario (naranja)
        'complementary-dark': '#cc4a02', // complementario oscuro
        'complementary-light': '#ff7a1f', // complementario claro
        'analogous': '#03effa', // un color análogo (turquesa)
        'analogous-dark': '#02c1c7', // análogo oscuro
        'analogous-light': '#7ffaff', // análogo claro
      },
    },
  },
  plugins: [],
}

