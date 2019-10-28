/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                pages: path.join(__dirname, 'src/pages'),
                scss: path.join(__dirname, 'scss'),
                static: path.join(__dirname, 'static'),
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: [__dirname],
            },
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-151066190-1",
            },
        }
    ],
};
