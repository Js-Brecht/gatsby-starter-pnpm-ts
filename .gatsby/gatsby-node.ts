/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { GatsbyNode, SourceNodesArgs } from 'gatsby';

const gatsbyNode: GatsbyNode = {
    sourceNodes: async ({
        actions: {
            createNode
        },
        createNodeId,
        createContentDigest
    }: SourceNodesArgs): Promise<void> => {
        /**
         * Create your nodes here
         */
        return;
    },

    onCreateWebpackConfig: ({
        actions: {
            replaceWebpackConfig,
            setWebpackConfig
        },
        getConfig
    }) => {
        /** Change this variable to true to disable code minification */
        const disableMinifictation = true;
        if (disableMinifictation) {
            const config = getConfig();
            if (config.optimization && config.optimization.minimizer) {
                const minimizers = config.optimization.minimizer.slice(1);
                config.optimization.minimizer = minimizers;
                replaceWebpackConfig(config);
            }
        }

        /** Uncomment this line if you want to see the webpack config echoed to your terminal */
        //console.log(JSON.stringify(getConfig(), (key, val) => val instanceof RegExp ? val.toString() : typeof val === 'function' ? `Function ${val.name}()` : val, 3));

        /** Enable source maps during development for debugging purposes */
        if (process.env.NODE_ENV === 'development') {
            setWebpackConfig({
                // devtool: 'eval-source-map',
                devtool: 'cheap-module-source-map',
            })
        }
    },
};

export default gatsbyNode;