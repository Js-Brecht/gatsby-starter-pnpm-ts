const TsPathsTransformer = require('@zerollup/ts-transform-paths');
const { generateConfig } = require('gatsby-plugin-ts-config');
module.exports = generateConfig({
    projectRoot: __dirname,
    configDir: '.gatsby',
    tsNode: {
        transformers: (program) => {
            const tsTransformPaths = TsPathsTransformer(program);
            return {
                before: [
                    tsTransformPaths.before,
                ],
                afterDeclarations: [
                    tsTransformPaths.afterDeclarations,
                ],
            };
        },
    },
});