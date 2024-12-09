/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        'header-bg': '#ffffff',
        'header-color': '#333333',
        'background-light': '#ffffff',
        'background-dark': '#222222',
        'text-light': '#333333',
        'text-dark': '#f0f0f0',
      },
      animation: {
        gradientShift: 'gradientShift 3s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
