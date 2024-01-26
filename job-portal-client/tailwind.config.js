/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#141414",
        "blue" : "#285185",
        "brown" : "D67940",
        "darkbrown" : "6F4849",
        "background" : "CCD9E2"
      }
    },
  },
  plugins: [],
}

