const js = require('@eslint/js')
const tseslint = require('typescript-eslint')

// ESLint 10 removed the eslintrc loader. @elonehoo/eslint-config@2.0.0 still
// pulls typescript-eslint 5, eslint-plugin-yml 0.14, and eslint-plugin-n 15,
// which call APIs ESLint 10 deleted (Linter#getRules, context.getFilename,
// context.getScope, scopeManager.addGlobals). This flat config is what
// `eslint .` can run. `no-explicit-any` stays off because isWindow() accepts
// any value on purpose.
module.exports = tseslint.config(
  {
    ignores: ['dist', 'public', 'coverage'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    extends: [tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // The library treats null and undefined the same (`arg == null`).
      eqeqeq: ['error', 'always', { null: 'ignore' }],
    },
  },
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
)
