module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    description: 'Starter kit for Gatsby by DK',
    // Twitter username
    author: '@dkthehuman',
    // Used for constructing Open Graph tags with SSR
    origin: 'https://www.dkthehuman.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    // SASS/SCSS files
    'gatsby-plugin-sass',

    // Query assets with GraphQL
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },

    // Image processing
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    // Manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#007bff',
        theme_color: '#007bff',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',

    // Typescript
    'gatsby-plugin-typescript',

    // Google Tag Manager
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-XXXXXXX',
      },
    },

    // Disable sourcemaps for production builds
    'gatsby-plugin-no-sourcemaps',
  ],
};
