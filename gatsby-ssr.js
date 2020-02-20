/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in .gatsby/gatsby-ssr.ts
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// Need to fake an endpoint so that Gatsby doesn't ignore this file
exports.onPreRenderHTML = () => null;

module.exports = require('./.gatsby/gatsby-ssr');