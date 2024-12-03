module.exports = {
    "extends": [
        "./common.js",
        "airbnb-base"
    ],
    "rules": {
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { "argsIgnorePattern": "^_" }
        ]
    },
    "ignorePatterns": [
        "src/**/migrations/*.ts"
    ],
};
