module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // plugins: ['react', 'prettier'],
  // rules: {
  //   'prettier/prettier': 'error',
  //   'react/prop-types': 'off',
  // },
};
