/* eslint-env jest */

const formattingConfig = require('../../configs/formatting-relaxed.js');

describe('formatting-relaxed', () => {
  it('should match the snapshot', () => {
    expect(formattingConfig).toMatchSnapshot();
  });
});
