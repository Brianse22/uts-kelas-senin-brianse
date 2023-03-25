/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        loby: "url('../src/assets/img/background (1).png')",
        nft : "url('../src/assets/img/unsplash_NjjONA3K0-k.png')",
      },

      colors :{
        background1 : "#120227",
        background2 : "#1F0443",
        primary : "#C93D8D",
        secondary : "#FFFFFFCC",
        hijau : "#22EE98",
        merah : "#FF1515",
        text1 : "#FFFFFF",
        text3 : "#FFFFFF80",
      },

      fontFamily :{
        'Poppinsmedium': ["PoppinsMedium", "sans-serif"],
        'PoppinsSemibold': ["PoppinsSemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}
