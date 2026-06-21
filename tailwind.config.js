export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#050505', card: '#0d0d0d', border: '#1a1a1a' },
        red: { DEFAULT: '#e63946', dark: '#c1121f' },
        cream: '#f1faee'
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        sans: ['"Space Grotesk"', 'sans-serif']
      }
    }
  },
  plugins: []
}
