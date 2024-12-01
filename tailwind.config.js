/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], 
      },
      letterSpacing: {
        '15': '0.15em',
      },
      colors: {
        'custom-blue': '#155FFC',  
        'custom-purple': '#6E3CFF',  
        'custom-light-gray': "#F3F3F3",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

