/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Ensure it scans your app folder
    './src/**/*.{js,ts,jsx,tsx}', // Scan all components inside src
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007BFF',
        'header-bg': '#ffffff',
        'header-color': '#333333',
        'background-light': '#ffffff',
        'background-dark': '#222222',
        'text-light': '#333333',
        'text-dark': '#f0f0f0',
      },
    },
  },
  plugins: [],
};
