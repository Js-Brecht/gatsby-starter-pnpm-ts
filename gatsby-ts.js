const TsPathsTransformer = require('@zerollup/ts-transform-paths');

require('ts-node').register({
    project: 'tsconfig.build.json',
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
});
const tsNodeUtility = (configPath) => {
    return require(configPath)(__dirname);
}

module.exports = tsNodeUtility;