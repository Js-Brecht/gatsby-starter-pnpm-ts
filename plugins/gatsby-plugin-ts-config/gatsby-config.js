const TsPathsTransformer = require('@zerollup/ts-transform-paths');
const tsNode = require('ts-node');
const path = require('path');
const fs = require('fs');
const gatsbyConfigs = ['config', 'node', 'browser', 'ssr'].join('|');

const namespace = require('./namespace');

module.exports = (args) => {
    const {
        configDir = process.cwd(),
        projectRoot = process.cwd(),
    } = args;
    global[namespace] = {
        configDir,
        projectRoot,
    };

    const isProjectConfig = (fPath) => {
        const checkPath = new RegExp(`^${path.join(configDir, `gatsby-(${gatsbyConfigs}).[jt]sx?`).replace(/([/\\.])/g, '\\$1')}$`);
        return checkPath.test(fPath);
    };

    const tsNodeService = tsNode.register({
        project: path.join(projectRoot, 'tsconfig.json'),
        compilerOptions: {
            module: "commonjs",
            target: "es2015",
            allowJs: true,
            noEmit: true,
            declaration: false,
            importHelpers: true,
            resolveJsonModule: true,
            jsx: "preserve",
        },
        files: true,
        readFile: (fPath) => {
            if (isProjectConfig(fPath)) {
                const fileName = path.basename(fPath);
                const fileBaseName = fileName.slice(0, fileName.length - path.extname(fileName).length);
                return fs.readFileSync(path.resolve(__dirname, '.gatsby', `${fileBaseName}.ts`)).toString();
            }
            return fs.readFileSync(fPath).toString();
        },
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
    tsNodeService.ignored = (fPath) => {
        if (isProjectConfig(fPath)) return false;
        /** This would match ALL typescript files.  We only want to match the user's gatsby config files */
        // return !(/\.tsx?$/.test(fPath));
        return true;
    };

    const ext = configDir === projectRoot ? '.ts' : '';

    try {
        return require(path.join(configDir, `gatsby-config${ext}`))(projectRoot);
    } catch (err) {
        // No typescript config found, return nothing.
        return;
    }
};