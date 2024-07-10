/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "1000px",
        lg: "1400px",
        xl: "1280px",
        "2xl": "1536px",
        // Custom breakpoints
        tablet: "1200px",
        laptop: "1024px",
        desktop: "1280px",
        wide: "1536px",
      },
    },
  },
  plugins: [],
};
