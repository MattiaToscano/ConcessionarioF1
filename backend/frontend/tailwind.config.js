/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'f1-red': '#e10600',
        'f1-dark': '#15151e',
        'f1-silver': '#c0c0c0',
      },
      fontFamily: {
        'f1': ['Formula1', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}