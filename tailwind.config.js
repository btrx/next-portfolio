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
        'hero': "url('/hero.png')",
        'about': "url('/about.png')"
      },
      fontFamily: {
        sans: ['var(--font-AB)', ...fontFamily.sans],
        mono: ['var(--font-Epi)', ...fontFamily.mono]
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
      },
      animation: {
        "slide-out-bottom": "slide-out-bottom 1.5s ease infinite"
      },
      keyframes: {
        "slide-out-bottom": {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: '1'
          },
          '50%': {
            transform: 'translateY(0px)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(15px)',
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [],
}
