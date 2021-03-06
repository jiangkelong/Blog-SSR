module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'eslint:recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "prettier/prettier": ["error", {
      "endOfLine":"auto",
      "singleQuote": true,
      "trailingComma": "none",
      "bracketSpacing": true,
      "jsxBracketSameLine": true
    }],
    'no-console':'off'
  }
}
