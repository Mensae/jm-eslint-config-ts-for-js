/* eslint-env jest */

const formattingConfig = require('../../configs/formatting.js');

describe('formatting', () => {
  it('should match the snapshot', () => {
    expect(formattingConfig).toMatchSnapshot();
  });
});
