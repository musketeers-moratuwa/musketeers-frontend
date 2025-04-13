/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this covers your project structure
  ],
  theme: {
    extend: {
       fontFamily: { // Optional: Add custom fonts if needed
           serif: ['Merriweather', 'serif'], // Example serif font
       },
    },
  },
  plugins: [],
}