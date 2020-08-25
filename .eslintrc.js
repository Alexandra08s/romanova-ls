module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'linebreak-style': [0, 'error', 'unix'],
    semi: ['error', 'never'],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: 1,
        allowFirstLine: false
      }
    ],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  plugins: ['vue']
}
