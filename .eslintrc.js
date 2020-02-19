const path = require('path');

module.exports = {
    "extends": [
        "@jtechsvcs/react-typescript"
    ],
    "plugins": [
        "graphql"
    ],
    "globals": {
        "graphql": true
    },
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/camelcase": "off",
        "graphql/template-strings": [
            "error",
            {
                "env": "relay",
                "tagName": "graphql",
                "schemaJsonFilepath": path.resolve(__dirname, '.gatsby/graphql/introspection.json'),
            }
        ],
    }
}