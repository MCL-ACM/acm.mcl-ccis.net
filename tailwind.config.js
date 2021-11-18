module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1900px',
    },

    container: {
      center:true,
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
        '3xl': '1700px',
      },
      padding:"1rem"
    },
    extend: {
      colors: {
        "dark-blue": "#122F45",
        blue: "#1F6199",
        "light-blue": "#00A4C8",
        "light-green": "#D9ED92",
        "sea-green": "#2CC1C7",
        "opaque-light-green": "#D6F2E1",
      },
      borderRadius: {
        "4xl": "5rem",
        "5xl": "10rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
