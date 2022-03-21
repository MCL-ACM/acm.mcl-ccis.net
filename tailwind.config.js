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
        'border-glow': '0px 0px 17px 0px rgba(0, 216, 243, 0.7)',
      },
      colors: {
        'cerulean-crayola': '#00A8DB',
        'standard-blue': '#0070EE',
        'oxford-blue': '#00214E',
        'maximum-blue-green': '#32C2C2',
        'rich-black': '#001F29',
        'darkish-blue': '#184E77',
        'ming': '#0D6E7A',
      },
      backgroundImage: {
        'footer-texture': "url('/src/images/svg/footer-background.svg')",
      },
    },
  },
  plugins: [],
};
