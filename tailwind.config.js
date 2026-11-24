/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#fbf7f9',
          100: '#f6eff3',
          200: '#eedee7',
          300: '#dfbfd2',
          400: '#c895b3',
          500: '#b06f94',
          600: '#955077',
          700: '#7c3e60',
          800: '#673550',
          900: '#562f44',
          950: '#341726',
        },
        thread: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
