module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // 'prettier/prettier': [
    //   'warn',
    //   {
    //     singleQuote: true,
    //     semi: true
    //   }
    // ]
    semi: 0,
    'space-before-function-paren': ['error', 'never']

    // "eol-last": 0,
    // "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    // "quotes": [2, "single", { "avoidEscape": true }]
  }
};
