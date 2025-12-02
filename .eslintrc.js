module.exports = {
    parser: '@typescript-eslint/parser', // si tu utilises TypeScript
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        // tes règles personnalisées ici
    },
};
