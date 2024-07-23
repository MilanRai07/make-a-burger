/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        'xl': { 'max': '1279px' },
        'x-l': { 'max': '1141px' },
        'lg': { 'max': '1051px' },
        'l-g': { 'max': '912px' },
        'mlg': { 'max': '855px' },
        'md': { 'max': '767px' },
        'm-d': { 'max': '731px' },
        'sm': { 'max': '639px' },
        'sm-d': { 'max': '534px' },
        'xs': { 'max': '474px' },
        '1xs': { 'max': '426px' }
      }
    },
  },
  plugins: [],
}

