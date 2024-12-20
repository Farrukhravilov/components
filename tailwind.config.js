/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/daisyui/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3fr-auto': '3fr auto', // Добавление кастомного значения
      },
    },
  },
  plugins: [require("daisyui")],  
}