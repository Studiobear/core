const eslintSveltePreprocess = require('eslint-svelte3-preprocess')
const svelteConfig = require('./svelte.config')

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3', 'prettier'],
  extends: ['plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'svelte3/preprocess': eslintSveltePreprocess(svelteConfig.preprocess),
  },
}
