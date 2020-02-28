import * as path from 'path';
import { GatsbyConfig } from 'gatsby';
import { IPluginOptions as IPnpmPluginOptions } from 'gatsby-plugin-pnpm';

/**
 * This is just an interface used to extend the default GatsbyConfig interface
 * with the additional plugin definitions
 */
interface IGatsbyConfiguration<TPluginDefinition extends IGatsbyPluginOptions = IGatsbyPluginOptions> extends GatsbyConfig {
    plugins?: Array<
        | string
        | IGatsbyPluginOptions
        | TPluginDefinition
    >;
}

/**
 * For other plugins that have types defined for their options,
 * define them using this interface, and include the definition in
 * the `exports` return type
 */
type IGatsbyPluginOptions<TName extends string = string, TOptions extends Record<string, unknown> = Record<string, unknown>> = {
    resolve: TName;
    options: TOptions;
}

export default (projectRoot: string): IGatsbyConfiguration<
    | IGatsbyPluginOptions<'gatsby-plugin-pnpm', IPnpmPluginOptions>
    // Add additional plugin types here
> => ({
    siteMetadata: {
        title: `Gatsby PNPM/Typescript Starter`,
        description: `Kick off your next, great Gatsby project with this starter. This starter ships with the main Gatsby configuration files you might need, including support for PNPM and Typescript.  It also includes a file structure that is conducive for developing your Gatsby configuration files with Typescript`,
        author: `@js-brecht`,
    },
    plugins: [
        // path.join(__dirname, 'gatsby-node'),
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