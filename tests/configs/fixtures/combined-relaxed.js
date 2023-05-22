/* eslint-env node */

module.exports = {
  extends: [
    '../../../configs/ts-for-js-relaxed.js',
    '../../../configs/formatting-relaxed.js'
  ].map(require.resolve)
};
