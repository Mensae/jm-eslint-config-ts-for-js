/* eslint-env node */

module.exports = {
  extends: [
    '../../../configs/ts-for-js.js',
    '../../../configs/formatting.js'
  ].map(require.resolve)
};
