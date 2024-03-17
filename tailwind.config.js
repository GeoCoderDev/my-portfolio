/** @type {import('tailwindcss').Config} */
import { raw } from "express";
import animations from "tailwindcss-animate";

export default {
  content: ["./index.css", "./src/**/*.{tsx, js, ts, jsx}"],

  theme: {
    screens: {
      sxs: "0px",
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "max-xs": { max: "200px" },
      "max-sm": { max: "480px" },
      "max-md": { max: "768px" },
      "max-lg": { max: "976px" },
      "pseudo-portrait": { raw: "(max-aspect-ratio: 1.4/1)" },
      portrait: { raw: "(orientation: portrait)" },
      landscape: { raw: "(orientation: landscape)" },
      "small-height": { raw: "(min-aspect-ratio: 2.55/1)" },
      "min-h-1000": { "min-height": "1000px" },
      "more-double-height": {raw:"(max-aspect-ratio: 1/2)"}
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
      gridTemplateColumns: {
        "header-cols-3": "1fr 4fr 1fr",
        "header-cols-2": "1fr 1fr",
      },
    },
  },
  plugins: [animations],
};
