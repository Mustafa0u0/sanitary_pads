/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        'brand-green': '#A3C9A8',   // light green
        'brand-dark': '#366636',    // dark green
        'brand-peach': '#E8BFA1'    // peach tone
      }
    }
  },
  plugins: [],
}