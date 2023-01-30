/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 4px 5px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        connect: 'linear-gradient(to-rigth, #0288D1, #7CB342, #D1C530, #D1C530, #7CB342)'
      },
      colors: {
        primary: "rgb(18, 24, 56)",
        secondary: "#0288D1",
        third: "#88b053",
        icon: '#006093',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}