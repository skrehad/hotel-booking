/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 60px 35px  50px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("daisyui")],
};
