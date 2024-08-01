/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-3xl": "1660px",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        worksans: ['"Work Sans"', "sans-serif"],
      },
      backgroundColor: {
        hexgreen: ["#23BE0A"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
