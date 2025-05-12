module.exports = {
    "extends": [
        "airbnb-base",
        "./common.js"
    ],
    "rules": {
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { "argsIgnorePattern": "^_" }
        ]
    },
};
