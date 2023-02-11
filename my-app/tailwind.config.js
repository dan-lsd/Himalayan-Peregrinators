/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      fontFamily:{
        lora: "'Lora', serif",
        hand: "'Satisfy', cursive",
        roboto:"'Roboto', sans-serif"
      },
      colors:{
        primaryBlue:"#405cf5",
        projectBlue:"#40E0D0"
      }
    },
  },
  plugins: [],
}
