/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 5s ease infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 0, 150, 0.8)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 0, 150, 1)" },
        },
      },
      backgroundSize: {
        "400%": "400%",
      },
    },
  },
  plugins: [],
};


