/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#dbeafe',
          950: '#172554',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

