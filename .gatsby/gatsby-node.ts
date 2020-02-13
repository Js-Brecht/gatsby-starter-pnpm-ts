/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { GatsbyNode, SourceNodesArgs } from 'gatsby';

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
        },
    };
};