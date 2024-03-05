/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCB05",
        dark: "#1c1e27",
        gray: "#757783",
        modalBg: "rgba(21, 14, 40, 0.93)",
        // light: "rgba(220,205,244,.2)",
        // borderColor: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
