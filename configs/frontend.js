const fs = require("fs");
const path = require("path");

function getProjectSrcPath(srcDir = "src") {
    // cwd — это корень проекта, не этой библиотеки
    return path.resolve(process.cwd(), srcDir);
}

function generateInternalFoldersRegex(srcRoot = "src") {
    const fullSrcPath = getProjectSrcPath(srcRoot);
    if (!fs.existsSync(fullSrcPath)) {
        return '^src/';
    }

    const folders = fs.readdirSync(fullSrcPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // escape regex

    return `^(${folders.join('|')})(/|$)`;
}

function generateSinglePathGroup(srcRoot = "src") {
    const fullSrcPath = getProjectSrcPath(srcRoot);
    if (!fs.existsSync(fullSrcPath)) return [];

    const folders = fs.readdirSync(fullSrcPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    return [{
        pattern: `{${folders.join(',')}}/**`,
        group: "internal",
        position: "after",
    }];
}

const pathGroups = generateSinglePathGroup();
const internalRegex = generateInternalFoldersRegex();

module.exports = {
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "plugin:css-import-order/recommended",
        "./common.js",
    ],
    "plugins": ["css-import-order"],
    "globals": {
        "__": true
    },
    "env": {
        "browser": true,
    },
    "settings": {
        'import/internal-regex': internalRegex,
    },
    "rules": {
        "react/destructuring-assignment": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-quotes": ["warn", "prefer-single"],
        "quotes": ["warn", "single", { "avoidEscape": true }],
        "react/no-array-index-key": "off",
        "no-alert": "off",
        "react/button-has-type": "off",
        "react/jsx-max-props-per-line": ["error", { "when": "always" }],
        "react/jsx-key": ["error"],
        "react/require-default-props": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "react-hooks/exhaustive-deps": ["warn", {
            "additionalHooks": "^use(Async|AsyncFn|AsyncRetry|Debounce|UpdateEffect|IsomorphicLayoutEffect|DeepCompareEffect|ShallowCompareEffect)$"
        }],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "@angular-eslint/no-empty-lifecycle-method": "off",
        "react/react-in-jsx-scope": "off",
        "import/order": [
                "error",
                {
                    "groups": [
                        "external",
                        "internal",
                        ["sibling", "parent"],
                        "index"
                    ],
                    "pathGroups": pathGroups,
                    "pathGroupsExcludedImportTypes": [],
                    'newlines-between': 'always',
                    "alphabetize": {
                        "order": "asc",
                        "caseInsensitive": false
                    }
                }
            ],
    },
};
