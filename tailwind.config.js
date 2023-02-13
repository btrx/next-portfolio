/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/hero.png')"
      },
      fontFamily: {
        sans: ['var(--font-AB)', ...fontFamily.sans]
      },
      colors: {
        black: {
          50: "#EAE9EC",
          100: "#D5D3D9",
          200: "#ABA8B3",
          300: "#7E798B",
          400: "#565360",
          500: "#2F2D34",
          600: "#252329",
          700: "#1B1A1E",
          800: "#141316",
          900: "#0A090B"
        }
      }
    },
  },
  plugins: [],
}
