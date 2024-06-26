/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
        },
        slideRight: {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0)" },
        },
        slideLeft: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        slideRight: "slideRight 0.7s ease-in-out",
        slideLeft: "slideLeft 0.7s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
