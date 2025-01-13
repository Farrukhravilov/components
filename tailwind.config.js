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
      animation: {
        'scroll-up': 'scrollUp 1s ease-out',
        'scroll-down': 'scrollDown 1s ease-out',
      },
      keyframes: {
        scrollUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scrollDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      screens: {
        'max-1370': {'max': '1370px'},
        'max-1310': {'max': '1310px'},
        'max-1210': {'max': '1210px'},
        'max-1046': {'max': '1046px'},
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
