/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // we'll toggle via a CSS class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#0ea5e9", // teal‑like accent (matches ann‑maina)
        faint: "#f1f5f9", // very light background for sections
      },
    },
  },
  plugins: [],
};
