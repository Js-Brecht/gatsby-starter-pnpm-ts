/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { GatsbyNode, SourceNodesArgs } from 'gatsby';

// @ts-ignore
export = (projectRoot: string): GatsbyNode => {
    return {
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
            // const config = getConfig();
            // if (config.optimization && config.optimization.minimizer) {
            //     const minimizers = config.optimization.minimizer.slice(1);
            //     config.optimization.minimizer = minimizers;
            //     replaceWebpackConfig(config);
            // }
            // return;
            //console.log(JSON.stringify(getConfig(), (key, val) => val instanceof RegExp ? val.toString() : typeof val === 'function' ? `Function ${val.name}()` : val, 3));
            if (process.env.NODE_ENV === 'development') {
                setWebpackConfig({
                    // devtool: 'eval-source-map',
                    devtool: 'cheap-module-source-map',
                })
            }
        },
    };
};