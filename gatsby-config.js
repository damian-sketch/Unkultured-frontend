const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Unkultured Africa`,
    description: `This is a gatsby blog website`,
    author: `@damian`,
  },
  // proxy: {
  //     prefix: "/api",
  //     url: "http://localhost:3000",
  //   },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Imbue`,
    //         variants: [`800`, `900`]
    //       },
    //       {
    //         family: `Roboto`,
    //         subsets: [`latin`]
    //       },
    //     ],
    //   },
    // },                
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
