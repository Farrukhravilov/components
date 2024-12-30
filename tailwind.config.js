/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/daisyui/**/*.js",
  ],
  darkMode: 'class', // Это важно для работы с темной темой
  theme: {
    extend: {
      gridTemplateColumns: {
        '3fr-auto': '3fr auto', // Добавление кастомного значения
        'background-light': '#ffffff',
        'background-dark': '#121212',
        'text-light': '#000000',
        'text-dark': '#ffffff',
      },
    },
    colors: {
      // Ты можешь расширить цвета, например, добавив фоны для светлой и темной темы
      background: {
        light: '#ffffff',  // Светлый фон
        dark: '#000000'    // Темный фон
      },
      text: {
        light: '#000000',  // Темный текст для светлой темы
        dark: '#ffffff'    // Светлый текст для темной темы
      }
    },
  },
  plugins: [require("daisyui")],  
}
