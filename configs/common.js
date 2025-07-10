module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "ignorePatterns": ["eslint*", ".eslint*"],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "env": {
        "node": true,
        "es6": true
    },
    "rules": {
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1,
                "ignoredNodes": [
                    "FunctionExpression > .params[decorators.length > 0]",
                    "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
                    "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
                ]
            }
        ],
        "arrow-parens": "off",
        "curly": ["error", "all"],
        "object-curly-spacing": ["error", "never"],
        "spaced-comment": "off",
        "no-confusing-arrow": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "prefer-destructuring": "off",
        "no-use-before-define": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "no-console": [
            "error",
            {
                "allow": ["error", "warn", "info"]
            }
        ],
        "global-require": "off",
        "no-underscore-dangle": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-await-in-loop": "off",
        "no-restricted-syntax": "off",
        "class-methods-use-this": "off",
        "no-empty-function": "off",
        "object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": false
            }
        ],
        "@typescript-eslint/no-empty-function": "off",
        "max-len": [
            "error",
            {
                "code": 150,
                "tabWidth": 4
            }
        ],
        "linebreak-style": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-shadow": "off",
        "no-useless-constructor": "off",
        "no-inline-comments": "error",
        "import/prefer-default-export": "off",
        "object-curly-newline": "off",
        "prefer-template": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "comma",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false
                }
            }
        ],
    },
    "parserOptions": {
        "project": "./tsconfig.json",
        "ecmaFeatures": {
            "legacyDecorators": true
        }
    },
};
