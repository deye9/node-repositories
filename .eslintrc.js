module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [0],
        'no-var': 2,
        'prefer-const': 2,
        'prefer-arrow-callback': 1,
        'no-extra-parens': 1,
        'arrow-parens': [1, "as-needed"],
        'arrow-body-style': ["error", "as-needed"],
    }
}