/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        'xl': { 'max': '1182px' },
        'lg': { 'max': '967px' },
        'mlg': { 'max': '821px' },
        'md': { 'max': '747px' },
        'm-d': { 'max': '731px' },
        'sm': { 'max': '653px' },
        'sm-d': { 'max': '509px' },
        'xs': { 'max': '395px' },
        '1xs': { 'max': '287px' }
      },
      fontSize: {
        '2xs': '8px',
      },
      keyframes: {
        showSlow: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
      },
      animation: {
        'showSlow': 'showSlow 1s',
      },
    },
  },
  plugins: [],
}

