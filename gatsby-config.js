module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/items/*`] },
    },
  ],
  proxy: {
    prefix: '/api',
    url: 'http://localhost:5000',
  },
}
