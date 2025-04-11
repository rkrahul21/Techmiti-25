/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        techmiti: {
          cyan: "#00f2fe",
          purple: "#6a75f7",
        },
        background: "#121212",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".5", transform: "scale(0.95)" },
        },
        "gradient-pulse": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "0% 50%",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "100% 50%",
          },
        },
      },
      animation: {
        "gradient-xy": "gradient-xy 15s ease infinite",
        float: "float 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "gradient-pulse": "gradient-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
