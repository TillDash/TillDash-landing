/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-blue)',
        primary__dark: 'var(--primary-blue-dark)',
        secondary: 'var(--accent-cyan)',
        accent: '#3b82f6',
        white: 'var(--white)',
        light__blue: 'var(--light-blue)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
