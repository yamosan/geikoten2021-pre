module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D3D977",
        secondary: "#3A9151",
        bg: "#FFFAEC",
        white: "#FFFFFF",
        black: "#504746",
        gray: "#BFBFBF",
        "light-gray": "#DFDFDF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
