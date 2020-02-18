const path = require('path');
const { DefinePlugin } = require('webpack');
const namespace = require('./namespace');
const { configDir, projectRoot } = global[namespace];

let gatsbyNode = {};
try {
    gatsbyNode = require(path.join(configDir, 'gatsby-node'))(projectRoot);
} catch (err) { // gatsby-node didn't exist, so move on without it.
    // noop
}

const onCreateWebpackConfig = (args, options) => {
    const { setWebpackConfig } = args.actions;
    setWebpackConfig({
        plugins: [
            new DefinePlugin({
                __TS_CONFIG_DIR: JSON.stringify(configDir),
                __TS_CONFIG_PROJECT_DIR: JSON.stringify(projectRoot),
            }),
        ],
    });
    if (gatsbyNode.onCreateWebpackConfig) {
        gatsbyNode.onCreateWebpackConfig(args, options);
    }
};

module.exports = {
    ...gatsbyNode,
    onCreateWebpackConfig,
};