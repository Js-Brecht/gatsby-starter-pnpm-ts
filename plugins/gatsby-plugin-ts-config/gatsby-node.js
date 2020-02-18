const path = require('path');
const namespace = require('./namespace');
const { configDir, projectRoot } = global[namespace];

module.exports = require(path.join(configDir, 'gatsby-node'))(projectRoot);