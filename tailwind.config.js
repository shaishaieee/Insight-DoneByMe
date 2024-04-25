module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:
      {
          insightBanner: "url(../dist/img/banner-img.png)",
          insightProjecta: "url(../dist/img/projects1.png)",
          insightProjectb: "url(../dist/img/projects2.png)",
          insightProjectc: "url(../dist/img/projects3.png)",

        },

      colors: {
       
        dark: '#2b2b2b2b',
        light: '#ffffff',
        sable: '#060606',
        
      }

    },
  },
  plugins: [],
}