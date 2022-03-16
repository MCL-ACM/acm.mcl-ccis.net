// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: [`'Exo 2'`, ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        'button-glow-white': '0px 0px 20px 0px rgba(255,255,255,1)',
      },
      colors: {
        'cerulean-crayola': '#00A8DB',
        'standard-blue': '#0070EE',
        'oxford-blue': '#00214E',
        'darkish-blue': '#184E77',
        'rich-black': '#001F29',
        'maximum-blue-green': '#32C2C2',
      },
      backgroundImage: {
        'footer-texture': "url('/src/images/svg/footer-background.svg')",
      },
    },
  },
  plugins: [],
};
