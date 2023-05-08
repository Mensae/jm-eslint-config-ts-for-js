/* eslint-env jest */

const nodeConfig = require('../../configs/ts-for-js.js');

describe('eslint-config-ts-for-js', () => {
  it('should match the snapshot', () => {
    expect(nodeConfig).toMatchSnapshot();
  });
});
