/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-sun": {
          50: "#fffdeb",
          100: "#fef8c7",
          200: "#fdf08a",
          300: "#fde24c",
          400: "#fcd535",
          500: "#f6b20a",
          600: "#da8905",
          700: "#b56108",
          800: "#924b0e",
          900: "#783e0f",
          950: "#451f03",
        },
      },
    },
  },
  plugins: [],
};
