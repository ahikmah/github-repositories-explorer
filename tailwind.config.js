/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#A7C7E7",
        secondary: "#B5D6F6",
        accent: "#D0E3FF",
        background: "#F0F8FF",
        dark: {
          primary: "#7AA7C7",
          secondary: "#5B89B5",
          accent: "#416C99",
          background: "#1E293B",
        },
      },
      animation: {
        zoomInOut: "zoomInOut 1.5s ease-in-out infinite",
        spinFast: "spin 3s linear infinite",
        spinFastReverse: "spinReverse 3s linear infinite",
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.7" },
        },
        spinReverse: {
          "0%": { transform: "rotate(0deg)", opacity: "1" },
          "100%": { transform: "rotate(-360deg)", opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
