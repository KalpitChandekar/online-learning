import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#696984",
        blue: "#2F327D",
        orange: "#F48C06",
        sky_blue: "#23BDEE",
      },
      backgroundColor: {
        main: "#FFF2E1",
        subscribe: "#545AE8",
        orange: "#F48C06",
        sky_blue: "#23BDEE",
        footer: "#252641",
      },
    },
  },
  plugins: [],
};
export default config;
