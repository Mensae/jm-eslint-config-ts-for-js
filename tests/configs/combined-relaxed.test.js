/* eslint-env jest */

const { ESLint } = require('eslint');

test('ts-for-js config plus formatting', async () => {
  const configFilePath = './fixtures/combined-relaxed.js';

  try {
    const eslint = new ESLint();

    const config = await eslint.calculateConfigForFile(configFilePath);

    expect(config).toMatchSnapshot();
  } catch (error) {
    throw new Error(error);
  }
});
