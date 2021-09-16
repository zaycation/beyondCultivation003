require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// gatsby-config.js
const myQuery = `{
  pages: allSitePage {
    nodes {
      # try to find a unique id for each node
      # if this field is absent, it's going to
      # be inserted by Algolia automatically
      # and will be less simple to update etc.
      objectID: id
      component
      path
      componentChunkName
      jsonName
      internal {
        type
        contentDigest
        owner
      }
    }
  }
}`

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: "beyondcultivation", // overrides main index name, optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    matchFields: ["slug", "modified"], // Array<String> overrides main match fields, optional
  },
]

module.exports = {
  siteMetadata: {
    title: "Beyond Cultivation",
    description:
      "The best online resource for cannabis grow guides, tutorials, and faq's!",
    author: "zaycationdev",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-M6PWDEYDYK", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        enablePartialUpdates: true, // default: false
        matchFields: ["slug", "modified"], // Array<String> default: ['modified']
        concurrentQueries: false, // default: true
        skipIndexing: true, // default: false, useful for e.g. preview deploys or local development
        continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline

    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
  ],
}
