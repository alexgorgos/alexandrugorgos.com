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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-1MR9JJ46VM"],
      },
      pluginConfig: {
        head: true,
        anonymize_ip: true,
      },
    },
  ],
};
