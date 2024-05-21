/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#FF5733', // Example primary color (change to your desired color)
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}