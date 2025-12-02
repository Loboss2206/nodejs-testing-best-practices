import js from '@eslint/js';
import globals from 'globals';

export default [
    // Configuration de base recommandée
    js.configs.recommended,

    {
        // Fichiers à ignorer
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/.git/**',
            '**/coverage/**'
        ]
    },

    {
        // Configuration pour les fichiers JavaScript
        files: ['**/*.js', '**/*.mjs', '**/*.cjs'],

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            }
        },

        rules: {
            // Règles de qualité du code
            'no-unused-vars': ['warn', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }],
            'no-console': 'warn',
            'no-debugger': 'warn',

            // Règles de style
            'indent': ['error', 2],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'never'],

            // Bonnes pratiques
            'eqeqeq': ['error', 'always'],
            'curly': ['error', 'all'],
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-arrow-callback': 'warn',
            'arrow-spacing': 'error',
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'eol-last': ['error', 'always']
        }
    }
];