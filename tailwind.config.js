const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
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
      fontSize: {
        xxs: ".625rem", // 10px
      },
      fontFamily: {
        sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
        genuine: ["Genuine", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        33: "8.25rem", // 132px
      },
      boxShadow: {
        solid: "3px 3px 0 0 rgba(80, 71, 70, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
