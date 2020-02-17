module.exports = {
    client: {
        name: 'search2hope',
        tagName: 'graphql',
        includes: [
            `${__dirname}/src/**/*.{ts,tsx}`,
            `${__dirname}/.gatsby/graphql/plugin-documents.graphql`,
        ], // eslint-disable-line
        service: {
            name: 'GatsbyJS',
            localSchemaFile: `${__dirname}/.gatsby/graphql/schema.graphql`,
        },
    },
};