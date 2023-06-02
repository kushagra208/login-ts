
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height:{
        "full": "85vh",
      },
      backgroundImage:{
        "background": "url('/src/assets/image.jpg')",
      },
      fontSize:{
        '2.5xl': '34px',
      },
      textColor: {
        'teal-blue': "#08A593",
      },
      width: {
        "med": "360px",
        "half": "50%",
        "ninety": "90%",
      },
      borderRadius:{
        "ten": "10px",
      },
      boxShadow: {
        "custom": "0px 20px 32px rgba(2, 1, 0, 0.42)",
      },
      borderColor: {
        "custom": "#464660"
      },
      spacing: {
        '30': "7.7rem",
        '100': "39.5%",
      },
    },
  },
  plugins: [],
}

