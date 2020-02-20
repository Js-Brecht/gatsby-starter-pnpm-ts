module.exports = {
    client: {
        name: 'gatsby-starter-pnpm-ts',
        tagName: 'graphql',
        includes: [
            `${__dirname}/src/**/*.{ts,tsx}`,
            `${__dirname}/.gatsby/graphql/plugin-documents.graphql`,
        ], // eslint-disable-line graphql/template-strings
        service: {
            name: 'GatsbyJS',
            localSchemaFile: `${__dirname}/.gatsby/graphql/schema.graphql`,
        },
    },
};