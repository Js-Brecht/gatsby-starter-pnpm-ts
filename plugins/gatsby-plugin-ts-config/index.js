const path = require('path');
exports.generateConfig = (project = process.cwd(), configDir = '') => ({
    plugins: [
        {
            resolve: `gatsby-plugin-ts-config`,
            options: {
                projectRoot: project,
                configDir: path.join(project, configDir),
            },
        },
    ],
});