/* eslint-env node */

module.exports = {
  extends: ['@jm/base', '@jm/eslint-config-base/formatting'],

  parserOptions: {
    project: './tsconfig.json'
  },

  overrides: [
    {
      files: ['**/__tests__/**', '*.test.*', '*.spec.*'],

      extends: [
        '@jm/node',
        '@jm/eslint-config-node/formatting',
        '@jm/jest',
        '@jm/eslint-config-jest/formatting'
      ]
    },
    {
      files: ['*.js'],

      extends: ['./configs/ts-for-js.js', './configs/formatting.js']
    }
  ]
};
