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
      portrait: {'raw': '(orientation: portrait)'},
      landscape: {'raw': '(orientation: landscape)'},
      "small-height": {'raw': '(min-aspect-ratio: 2.55/1)'}
      
    },
    extend: {
      colors: {
        "cerulean-blue-50": "#f1f5fd",
        "cerulean-blue-100": "#e0e9f9",
        "cerulean-blue-200": "#c8d8f5",
        "cerulean-blue-300": "#a2bfee",
        "cerulean-blue-400": "#769de4",
        "cerulean-blue-500": "#567cdb",
        "cerulean-blue-600": "#4162cf",
        "cerulean-blue-700": "#3951c2",
        "cerulean-blue-800": "#33429a",
        "cerulean-blue-900": "#2d3a7b",
        "cerulean-blue-950": "#20264b",
      },
    },
  },
  plugins: [animations],
};
