/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/Banner.png')",
        'AnatherAdd': "url('/src/assets/Anather ad.png')",
        
      },
      colours:{
        'TextColour' : "#767676",
        'FooterColor' : "#979797",
      },

    },
  },
  plugins: [],
}

