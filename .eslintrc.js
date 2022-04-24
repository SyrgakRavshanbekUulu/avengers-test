module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'require-jsdoc': 'off',
    'no-unused-vars': 'warn',
    'semi': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'indent': 'off',
    'new-cap': 'off',
    'object-curly-spacing': 'off',
  },
};
