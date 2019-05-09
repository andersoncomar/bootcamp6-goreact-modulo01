module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readable',
    SharedArrayBuffer: 'readable',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePatter: '^_',
      },
    ],
  },
};
