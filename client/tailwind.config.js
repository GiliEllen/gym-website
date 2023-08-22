/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#e1fcf9",
        // "gray-20": "#F8F4EB",
        "gray-50": "#e6ecef",
        "gray-100": "#ccdbdf",
        "gray-500": "#00035e",
        "primary-100": "#bcefff",
        "primary-300": "#a3cfff",
        "primary-500": "#667fff",
        "secondary-400": "#5bfaff",
        "secondary-500": "#77D4FC",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #61e7ff 0%, #379bff 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        evolvetextlb: "url('./assets/EvolveText-lb.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/shape3.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};