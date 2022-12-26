module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    overrides: [{
        files: ['*.ts', '*.tsx'],
        extends: [
            'plugin:react/recommended',
            'standard-with-typescript',
            'plugin:i18next/recommended'
        ],

        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            project: ['./tsconfig.json'],
        },

        rules: {
            'react/react-in-jsx-scope': 0,
            'react/jsx-uses-react': 0,
            '@typescript-eslint/explicit-function-return-type': 0,
            '@typescript-eslint/prefer-nullish-coalescing': 0,
            '@typescript-eslint/strict-boolean-expressions': 0,
            '@typescript-eslint/naming-convention': 1,
            '@typescript-eslint/no-floating-promises': 1,
            '@typescript-eslint/no-misused-promises': 1,
            'i18next/no-literal-string': ['error', {markupOnly: true}],
        }
    },],


}
