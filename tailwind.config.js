/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        antom: ["Antom", "sans-serif"],
      },
      fontSize: {
        "xxs": "10px",
        "xxl": "5rem",
        "2xxl": "7rem",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(240deg, rgba(100,82,119,1) 17%, rgba(0,0,0,1) 100%)",
        "gradient-bg2": "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(126,34,206,1) 100%)",
        "gradient-bg3": "linear-gradient(68deg, rgba(0,0,0,1) 0%, rgba(126,34,206,1) 100%)",
        "gradient-bg4": "linear-gradient(135deg, rgba(126,34,206,1) 17%, rgba(0,0,0,1) 100%)",
        "gradient-bg5": "linear-gradient(135deg, rgba(39,39,42,1) 17%, rgba(0,0,0,1) 100%)"
      },
      colors: {
        "c1": "#FEF3B9",
        "c2": "rgb(157, 141, 174)",
        "c3": "rgba(126,34,206,1)",
        "c5": "rgba(250,204,21,1)"
      },
      spacing: {
        "inline": "inline",
      }
    },
  },
  plugins: [],
}
