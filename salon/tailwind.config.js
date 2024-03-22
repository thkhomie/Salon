/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        overall: "#FEFAE0",
        headingColor: "#AE2012",
        underLine: "#9B2226",
        textColor: "#6F1D1B",
        sectionColor: "#F8EDEB",
        homeColor: "#FFF952",
        homeSub: "#FFFF40",
        btnBKColor:"#450920",
        overlayBg: "rgba(0,0,0,0.3)",
      }
    },
  },
  plugins: [],
}

// All-background : #FEFAE0 heading-color : #AE2012 hover-underline : #9B2226 text-color: #6F1D1B section-background: #F8EDEB button-color : white background-color: #450920

// button:hover { background-color: #F8EDEB; (section-background) color: #AE2012; (heading-color) }