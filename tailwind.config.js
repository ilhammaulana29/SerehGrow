/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green1: "#468585",
        green2: "#50B498",
        green3: "#DFFFF9",
        greenPrimer: "#1E5454",
      },
    },
    // fontSize: {
    //   ban: ["8px", "10px"],
    // },
  },
  plugins: [],
};
