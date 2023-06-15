/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffa803',
        'accent-bg': '#f3f3f3',
        'accent': '#aaaaaa'
      },
      animation: {
        'spin-slow': 'spin 2.4s linear infinite',
      }
    },
  },
  plugins: [],
}