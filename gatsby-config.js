module.exports = {
  siteMetadata: {
    title: `Alexandru Gorgos | Developer | Photographer`,
    siteUrl: `https://alexandrugorgos.com`,
    description: "Alexandru Gorgos personal website",
    twitterUsername: `@alexandrugo_`,
    image: `/6532770.jpeg`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-1MR9JJ46VM",
      },
    },
  ],
};
