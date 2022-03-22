module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Exo 2', 'Roboto:100,300,400,500,700'],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ object }) => object.type,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'event',
        path: `${__dirname}/content/event`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'executive',
        path: `${__dirname}/content/executive`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'committee',
        path: `${__dirname}/content/committee`,
      },
    },
  ],
};
