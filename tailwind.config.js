module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cerulean-crayola': '#00A8DB',
        'standard-blue': '#0070EE',
      },
      backgroundImage: {
        'footer-texture': "url('/src/images/svg/footer-background.svg')",
      }
    },
  },
  plugins: [],
}
