/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1.2rem',
      base: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.2rem',
      '3xl': '2.4rem',
      '4xl': '2.6rem',
      '5xl': '2.8rem',
    },
    extend: {},
  },
  plugins: [],
}