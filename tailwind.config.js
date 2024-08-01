/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    container:{
      center:true,
    },
    screens: {
      'sm': '100%',
      'md': '720px',
      'lg': '960px',
      'xl': '1280px',
      'desktop':'1696px',
      'desktopFooter' :'1320px'
    },
    extend: {
      colors: {
        gray1: "#333333",
        btn: "#0060AF",
        textColor: "#00A88E",
        gray2: "#F9FAFB",
        grad1: "#E7F1F7",
        grad2: "#EEF9F8",
        border1: "#D0D5DD",
        text1: "#98A2B3",
        btn2: "#E9F9F3",
        btn3: "#F2F4F7",
        borda: "#D2D6DB",
        btn6: "#E6EFF7",
        map: "#F6F9FC",
        bordaFooter: "#344054",
        tabColor: "#002B4F",
      },
      backgroundImage: {
        'footerMobile': "url('/Image/Fina-Mobile-Footer.png')",
        'footDesktop': "url('/Image/Footer.png')",
      },
    },
  },
  plugins: [],
};
