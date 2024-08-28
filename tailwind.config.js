/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#00008b', // Add darkblue color
        lightblue: '#add8e6',  // Custom lightblue color
        lightgreen: '#90ee90', // Custom lightgreen color
      },
    },
  },
  plugins: [],
}
