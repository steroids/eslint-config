module.exports = {
    "extends": [
        "./common.js",
        "airbnb-base"
    ],
    "rules": {
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {"argsIgnorePattern": "^_"}
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "modifiers": ["const"],
                "types": ["string"],
                "format": ["PascalCase"],
                "filter": {
                    "regex": "^I[A-Z][a-z]+(?:[A-Z][a-z]*)*$",
                    "match": true,
                },
                "custom": {
                    "regex": "^I[A-Z][a-z]+(?:[A-Z][a-z]*)*$",
                    "match": false,
                },
                "suffix": ["Token"],
            }
        ],
    },
};
