module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base"
    ],
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
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "@typescript-eslint/no-var-requires": "off",
        "global-require": "off",
        "no-underscore-dangle": "off",
        "no-console": [
            "error",
            {
                "allow": ["error", "warn", "info"]
            }
        ],
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.test.ts"] }],
        "class-methods-use-this": "off",
        "no-await-in-loop": "off",
        "no-restricted-syntax": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": false
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "comma",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": true
                }
            }
        ],
        "max-len": [
            "error",
            {
                "code": 150,
                "tabWidth": 4
            }
        ],
        "prettier/prettier": "error",
        "import/prefer-default-export": "off",
        "no-useless-constructor": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "linebreak-style": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { "argsIgnorePattern": "^_" }
        ]
    },
    "parserOptions": {
        "ecmaFeatures": {
            "legacyDecorators": true
        }
    },
    "ignorePatterns": [
        "src/**/migrations/*.ts"
    ],
};
