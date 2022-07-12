/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: "1rem",
    },
    letterSpacing:{
      custom: '.25em',
    },
    extend: {
      colors: {
        "Dark-cyan": "hsl(158, 36%, 37%)",
        "Dark-cyan-d": "hsl(158, 36%, 17%)",
        Cream: "hsl(30, 38%, 92%)",

        "Very-dark-blue": "hsl(212, 21%, 14%)",
        "Dark-grayish-blue": "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Fraunces: "Fraunces, serif",
        Montserrat: "Montserrat, sans-seri",
      },
    },
  },
  plugins: [],
};
