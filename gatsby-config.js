/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Simply Recipes",
        description: "Nice and clean recipes site",
        author: "@maciejświechowicz",
        person: { name: "Maciek", age: "24" },
        simpleData: ["item1", "item2"],
        complexData: [{ name: "Maciek", age: "24" }, { name: "Someone", age: "20" }]
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `6yky91njus0h`,
                accessToken: process.env.CONTENTFUL_API_KEY
            }
        },
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: "Montserrat",
                            variants: ["400"],
                        },
                        {
                            family: "Inconsolata",
                            variants: ["400","500","600","700"],
                        },
                    ],
                },
            },
        },
    ]
}
