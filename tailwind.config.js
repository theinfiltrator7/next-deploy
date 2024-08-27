/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(white 2px,  rgb(27 27 27) 7px,  rgb(27 27 27) 100px);",
        circularDarkMd:
          "repeating-radial-gradient(white 2px, rgb(27 27 27) 8px, rgb(27 27 27) 60px)",

        circularDarkSm:
          "repeating-radial-gradient(white 2px,rgb(27 27 27) 8px,rgb(27 27 27) 50px)",
      },
    },
  },
  plugins: [],
};
