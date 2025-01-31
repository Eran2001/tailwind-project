/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      xxl: "1280px",
      xxxl: "1536px",
    },
  },
  plugins: [],
};
