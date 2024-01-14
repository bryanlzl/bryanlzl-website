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
        "top-left-name": "1.5vw",
        "expertise-title": "70px",
        "exp-title": "60px",
        "expertise-label": "23px",
        "main-name": "9.7vw",
        "main-name-desc": "0.14em",
        "main-name-sub-desc": "0.12em",
        "menu-item": "1vw",
        "menu-item-id": "0.7vw",
      },
      height: {
        "main-name": "205px",
        "exp-box-h": "333px",
        "exp-icon-h": "42px",
      },
      width: {
        "exp-box-w": "366px",
        "exp-icon-w": "42px",
        "main-name-sub-desc": "35vw",
      },
      padding: {
        "exp-y": "40px",
        "exp-x": "30px",
        "exp-top": "8vh",
        "exp-bottom": "20vh",
        "about-me-top": "24vh",
        "about-me-bottom": "36vh",
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
      blur: {
        smooth: "blur(2px)",
      },
      keyframes: {
        "project-pulse": {
          "0%, 100%": {
            opacity: 0.2,
            transform: "scale(0.9)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        "arrow-down-bounce": {
          "0%, 100%": { transform: "translateY(0)" },

          "50%": { transform: "translateY(-2em)" },
        },
        "blink-cursor": {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        "pulse-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 5px , 0 0 10px rgba(49,105,155, 0.5), 0 0 15px rgba(49,105,155, 0.5)",
          },
          "50%": {
            textShadow:
              "0 0 5px rgba(49,105,155, 0.7), 0 0 12px rgba(49,105,155, 0.7), 0 0 20px rgba(49,105,155, 0.7)",
          },
        },
      },
      screens: {
        xs: "500px",
      },
      animation: {
        "project-pulse": "project-pulse 2.5s ease-in-out infinite",
        "arrow-down-bounce": "arrow-down-bounce 5s infinite",
        "blink-cursor": "blink-cursor 1.5s infinite",
        "pulse-glow": "pulse-glow 2s linear infinite",
      },
    },
  },
  plugins: [],
};
