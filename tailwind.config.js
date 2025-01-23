const withMT = require("@material-tailwind/react/utils/withMT");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
      },
      colors: {
        "purple-1": "#4E4C9B",
        "light-blue": "#CAD5F1",
        "blue-1": "#518BC5",
        "pink-1": "#AE64A6",
      },
    },
  },
  plugins: [],
});
