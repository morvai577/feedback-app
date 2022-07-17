module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      mango: "#FABC2A",
      "copper-red": "#C17767",
      "uraniun-blue": "#B1DDF1",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
