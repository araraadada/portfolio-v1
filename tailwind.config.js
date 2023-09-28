/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      zIndex: {
        999: "999",
      },
      colors: {
        Fiord: "#404B69",
        "Radical-Red": "#F73859",
        "Mint-Julep": "#F3ECC8",
        Waterloo: "#798196",
      },
      screens: {
        mdmax: { max: "768px" },
      },
    },
  },
  plugins: [],
};
