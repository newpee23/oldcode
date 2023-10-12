/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Kanit", "sans-serif"],
        titleFont: ["Kanit", "sans-serif"],
      },
      boxShadow: {
        shadowDiv: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      }
    },
  },
  plugins: [],
};
