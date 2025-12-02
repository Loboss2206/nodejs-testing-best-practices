import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommended: true,
});

export default [
    ...compat.config({
        extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    }),
    {
        files: ["**/*.js", "**/*.ts"], // <-- extensions ici
        languageOptions: {
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
            },
        },
        rules: {
            // tes règles ici
        },
    },
];
