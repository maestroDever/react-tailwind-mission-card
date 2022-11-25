const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      'dark-jungle-green': 'rgb(28, 31, 55)',
      charcoal: 'rgb(55, 65, 81)',
      'light-blue': 'rgb(9, 129, 195)',
      'ghost-white': 'rgb(246, 248, 250)',
    },
    minWidth: {
      40: '160px',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
