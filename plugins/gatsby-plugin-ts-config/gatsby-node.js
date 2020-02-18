const path = require('path');
const { DefinePlugin } = require('webpack');
const namespace = require('./namespace');
const { configDir, projectRoot } = global[namespace];

const gatsbyNode = require(path.join(configDir, 'gatsby-node'))(projectRoot);

const onCreateWebpackConfig = (args, options) => {
    const { setWebpackConfig } = args.actions;
    setWebpackConfig({
        plugins: [
            new DefinePlugin({
                TS_CONFIG_DIR: JSON.stringify(configDir),
                TS_PROJECT_DIR: JSON.stringify(projectRoot),
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