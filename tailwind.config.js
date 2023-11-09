/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'sblack': '#2b2b2b',
        'swhite': '#f2f2f2',
      },
      boxShadow: {
        'bglow': '0 0 15px rgb(103, 232, 249)',
        'wglow': '0 0 15px rgb(255, 204, 51)',
        'b-iglow': '0 0 15px rgb(103, 232, 249)',
        'w-iglow': '0 0 15px rgb(255, 204, 51)',
        'full': '5px 10px',
      },
    },
    fontFamily: {
      itim: ['Itim', 'cursive'],
    },
  },
  plugins: [],
}
