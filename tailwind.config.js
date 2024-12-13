/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/daisyui/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],  
}