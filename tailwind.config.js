/** @type {import('tailwindcss').Config} */
import animations from "tailwindcss-animate";

export default {
  content: ["./index.css", "./src/**/*.{tsx, js, ts, jsx}"],

  theme: {
    screens: {
      xs: "100px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [animations],
};
