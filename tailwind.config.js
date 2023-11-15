/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js, ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "btn-orange": "#DA722C",
        "btn-nav": "#023047",
        "bg-nav": "#070917",
        "main-blue": "#6F7DFB",
      },
    },
  },
  plugins: [],
};
