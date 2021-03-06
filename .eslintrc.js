module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-console': 1,
    'react/prop-types': 0,
    'no-undef': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'require-jsdoc': 1,
    'max-len': [1, { code: 200 }],
    'object-curly-spacing': ['warn', 'always'],
    'comma-dangle': [1, 'never']
  }
};
