module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    rules: {
        '@typescript-eslint/no-floating-promises': 'off',

    },
    ignorePatterns: ["config/*", "*.js", "global.d.ts"],
    parserOptions: {
        project: "./tsconfig.json"
    },
    settings: {
        react: {
            "version": "detect"
        }
    }
}