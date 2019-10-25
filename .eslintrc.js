module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'standard',
  ],
  parserOptions: {
    'ecmaVersion': 6,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}