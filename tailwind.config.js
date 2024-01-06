/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/components/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
        poppins: ["Poppins", "sans"],
      },
      fontSize: {
        "main-name": "9.5rem",
      },
      spacing: {
        72: "18rem", // Custom whitespace value
        96: "24rem", // Another custom whitespace value
      },
    },
  },
  plugins: [],
};
