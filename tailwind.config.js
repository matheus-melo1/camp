/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        estante: {
          '0%': { right: '-520px', opacity: '0%' },
          '100%': { right: '0px', opacity: '100%' }
        },
      },
      animation: {
        estante: 'estante 0.4s ease-in-out'
      }
    },
  },
  plugins: [],
}