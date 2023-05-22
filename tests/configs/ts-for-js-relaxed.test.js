/* eslint-env jest */

const nodeConfig = require('../../configs/ts-for-js-relaxed.js');

describe('eslint-config-ts-for-js-relaxed', () => {
  it('should match the snapshot', () => {
    expect(nodeConfig).toMatchSnapshot();
  });
});
