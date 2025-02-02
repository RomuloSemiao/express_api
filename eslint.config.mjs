import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['src/**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    {
        rules: {
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'indent': ['error', 4],
            'comma-dangle': ['error', 'always-multiline'],
            'no-console': 'off',
            'eqeqeq': ['error', 'always'],
            'curly': ['error', 'all'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'arrow-spacing': ['error', { 'before': true, 'after': true }],
            'prefer-const': 'error',
        },
    },
];
