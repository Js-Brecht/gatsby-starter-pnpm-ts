import { IPluginOptions as IPnpmPluginOptions } from 'gatsby-plugin-pnpm';
import { ITSConfigFn, IMergePluginOptions } from 'gatsby-plugin-ts-config';

const gatsbyConfig: ITSConfigFn<'config',
    | IMergePluginOptions<'gatsby-plugin-pnpm', IPnpmPluginOptions>
    // Add additional plugin types here
> = ({
    projectRoot
}) => ({
    siteMetadata: {
        title: `Gatsby PNPM/Typescript Starter`,
        description: `Kick off your next, great Gatsby project with this starter. This starter ships with the main Gatsby configuration files you might need, including support for PNPM and Typescript.  It also includes a file structure that is conducive for developing your Gatsby configuration files with Typescript`,
        author: `@js-brecht`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-pnpm`,
            options: {
                strict: true,
                projectPath: projectRoot,
            }
        },
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                outputPath: `${projectRoot}/.gatsby/graphql/types.ts`,
                emitSchema: {
                    [`${projectRoot}/.gatsby/graphql/introspection.json`]: true,
                    [`${projectRoot}/.gatsby/graphql/schema.graphql`]: true,
                },
                emitPluginDocuments: {
                    [`${projectRoot}/.gatsby/graphql/plugin-documents.graphql`]: true,
                },
            }
        },
        {
            resolve: `gatsby-plugin-ts`,
            options: {
                codegen: false,
            }
        },
        `gatsby-plugin-tsconfig-paths`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${projectRoot}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `${projectRoot}/src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
});

export default gatsbyConfig;