module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cerulean-crayola': '#00A8DB',
        'standard-blue': '#0070EE',
        'oxford-blue': '#00214E',
        'darkish-blue': '#184E77',
        'rich-black': '#001F29'
      },
      backgroundImage: {
        'footer-texture': "url('/src/images/svg/footer-background.svg')",
      }
    },
  },
  plugins: [],
}
