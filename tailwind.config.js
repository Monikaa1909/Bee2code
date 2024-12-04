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
        '5': '0.05em',
        '10': '0.1em',
        '15': '0.15em',
        '20': '0.2em',
        '30': '0.3em',
      },
      colors: {
        'custom-orange': '#F2AB1B',
        'custom-blue': '#155FFC',  
        'custom-purple': '#6E3CFF',  
        'custom-light-gray': "#F3F3F3",
        'custom-dark-gray': "#2F2F2F",
      },
      boxShadow: {
        'small-box': '0 0 16px 0 rgba(0, 0, 0, 0.25)',
        'small-box-dark': '0 0 16px 2px rgba(0, 0, 0, 0.5)',
        'big-box': '0 0 16px 2px rgba(0, 0, 0, 0.25)',
        'text': '0 0 8px rgba(0, 0, 0, 0.15)', 
      },
      textShadow: {
        sm: '0 0 8px rgba(0, 0, 0, 0.15)',
        md: '0px 0px 6px rgba(0, 0, 0, 0.5)',
        lg: '0px 0px 16px rgba(0, 0, 0, 0.5)',
        'blue-sm': '0 0 16px rgba(21, 95, 252, 0.22)'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

