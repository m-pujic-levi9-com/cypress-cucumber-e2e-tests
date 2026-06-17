const cypress = require('eslint-plugin-cypress');
const chaiFriendly = require('eslint-plugin-chai-friendly');
const prettier = require('eslint-plugin-prettier');
const _import = require('eslint-plugin-import');

const { fixupPluginRules } = require('@eslint/compat');

module.exports = [
  {
    ignores: ['**/*.json', '**/pnpm-lock.yaml', '**/*.md', '**/.eslintignore', '**/*.feature']
  },
  ...Array.isArray(cypress.configs.recommended) ? cypress.configs.recommended : [cypress.configs.recommended],
  ...Array.isArray(chaiFriendly.configs.recommendedFlat) ? chaiFriendly.configs.recommendedFlat : [chaiFriendly.configs.recommendedFlat],
  {
    plugins: {
      prettier,
      import: fixupPluginRules(_import)
    },

    rules: {
      'no-unused-expressions': 'error',
      'chai-friendly/no-unused-expressions': 2,
      'sort-keys': 'off',

      indent: [
        'error',
        2,
        {
          SwitchCase: 1
        }
      ],

      'no-duplicate-imports': [
        'error',
        {
          includeExports: true
        }
      ],

      'comma-dangle': ['error', 'never'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': 'off',

      'max-len': [
        'warn',
        {
          code: 150,
          tabWidth: 2
        }
      ],

      'cypress/no-unnecessary-waiting': 'off',
      'cypress/no-pause': 'error',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/unsafe-to-chain-command': 'warn',
      'prettier/prettier': ['error']
    }
  }
];
