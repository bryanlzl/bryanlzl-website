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
        "top-left-name": "170%",
        "expertise-title": "75px",
        "expertise-label": "23px",
        "main-name": "10rem",
        "menu-item": "1.1rem",
        "menu-item-id": "0.6em",
      },
      margin: {
        "about-me-top": "23.5vh",
        "about-me-bottom": "40vh",
      },
      height: {
        "main-name": "205px",
        "exp-box-h": "333px",
      },
      width: {
        "exp-box-w": "366px",
      },
      padding: {
        "exp-y": "40px",
        "exp-x": "30px",
        "exp-top": "5vh",
        "exp-bottom": "30vh",
      },
      borderWidth: {
        "exp-box": "3px",
      },
      backgroundImage: {
        "exp-label-0":
          "linear-gradient(rgba(36, 36, 36, 0.6) 65%, #3613ff 55%)",
        "exp-label-1":
          "linear-gradient(rgba(36, 36, 36, 0.6) 65%, #cc00ff 55%)",
        "exp-label-2":
          "linear-gradient(rgba(36, 36, 36, 0.6) 65%, #ff5700 55%)",
      },
    },
  },
  plugins: [],
};
