module.exports = {
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'jest',
  ],
}
