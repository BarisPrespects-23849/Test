export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        netflixRed: "#E50914",
        netflixDark: "#141414",
        netflixGray: "#808080",
      },
      fontFamily: {
        netflix: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
