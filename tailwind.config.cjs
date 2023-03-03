/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      orange: "#E8863A",
      beige: "#F8F8ED",
      grøn: "#30482C",
    },
    extend: {
      fontFamily: {
        bigshoulders: "'Big Shoulders Text', cursive;'",
        abel: "'font-family: 'Abel', sans-serif;'",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
