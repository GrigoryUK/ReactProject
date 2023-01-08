module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-misused-promises': 1,
    'no-unused-vars': 1,
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }]
  },
  globals: {
    __IS_DEV__: "readonly"
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }]
};