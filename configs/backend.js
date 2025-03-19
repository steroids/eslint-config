module.exports = {
    "extends": [
        "./common.js",
        "airbnb-base"
    ],
    "plugins":["steroidsjs-backend"],
    "rules": {
        "steroidsjs-backend/required-enum-to-helper": "error",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { "argsIgnorePattern": "^_" }
        ]
    },
};
