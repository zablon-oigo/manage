/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'image':"url('./assets/images/bg-simplify-section-desktop.svg')"
      }
    },
  },
  plugins: [],
}

