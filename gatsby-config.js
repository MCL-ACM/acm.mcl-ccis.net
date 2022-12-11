module.exports = {
  siteMetadata: {
    title: `MCL-ACM`,
    siteUrl: `https://acm.mcl-ccis.net`,
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Malayan Colleges Laguna ACM Student Chapter`,
        short_name: `MCL-ACM`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/navbar/acm_chapter_logo.png`, // This path is relative to the root of the site.
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'former',
        path: `${__dirname}/content/former`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'heroSlideshow',
        path: `${__dirname}/src/images/home/heroSlideshow`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'homeSlideshow',
        path: `${__dirname}/content/homeSlideshow`,
      },
    },
  ],
};
