module.exports = {
    "extends": [
        "./common.js",
        "airbnb-base"
    ],
    "rules": {
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { "argsIgnorePattern": "^_" }
        ]
    },
    "ignorePatterns": [
        "src/**/migrations/*.ts"
    ],
};
