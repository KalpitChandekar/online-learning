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
        red: "#F67766",
        footer: "#252641",
        footer_text: "#B2B3CF",
      },
      backgroundColor: {
        main: "#FFF2E1",
        subscribe: "#545AE8",
        blue: "#5B61EB",
        orange: "#F48C06",
        bg_orange: "#F4B767",
        sky_blue: "#23BDEE",
        footer: "#252641",
        hero: "#FFF2E1",
        red: "#F56666",
        green: "#33EFA0",
      },
      backgroundImage: {
        instructor: "url('/instructor.png')",
        student: "url('/student.png')",
      },
    },
  },
  plugins: [],
};
export default config;
