/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom900: "900px", // 👈 This must exist
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
// tailwind.config.js