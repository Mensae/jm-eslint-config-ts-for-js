# @jm/eslint-config-ts-for-js

An [ESLint](http://eslint.org/) config that enforces best practices and prevents possible problems for the
[Node.js](https://nodejs.org/) environment.

It is meant as an extention to [@jm/eslint-config-base](https://github.com/Mensae/jm-eslint-config-base), but can
be used without.
By default it does not include any rules with regard to styling and formatting.

The idea is to use [prettier](https://prettier.io) for styling and so it does not include
rules that are conflicting with [prettier](https://prettier.io).

## Available configs

- `ts-for-js`, The, default, base configuration that does not include any rules with regard to styling
- `formatting`, Extention to the `ts-for-js` config that does include styling rules but only those that are not covered by [prettier](https://prettier.io).
- `ts-for-js-relaxed`, Base configuration with some relaxed rules. Better suitable for personal or small projects.
- `formatting-relaxed`, Extention to the `ts-for-js-relaxed` configuration.

## Installation

```sh
# inside your project's working tree
npm install @jm/eslint-config-ts-for-js --save-dev
```

## Usage

Example `.eslintrc.json` with only the base config

```json
{
  "extends": ["@jm/ts-for-js"]
}
```

Example `.eslintrc.json` with base config extended with formatting rules

```json
{
  "extends": ["@jm/ts-for-js", "@jm/eslint-config-ts-for-js/formatting"]
}
```

Recommended:

```json
{
  "extends": [
    "@jm/base",
    "@jm/eslint-config-base/formatting",
    "@jm/ts-for-js",
    "@jm/eslint-config-ts-for-js/formatting"
  ]
}
```

Recommended, relaxed:

```json
{
  "extends": [
    "@jm/base-relaxed",
    "@jm/eslint-config-base/formatting-relaxed",
    "@jm/ts-for-js-relaxed",
    "@jm/eslint-config-ts-for-js/formatting-relaxed"
  ]
}
```

Some rules require type information. Therefore you need to add the
`parserOptions` property to your ESLint configuration:

```json
{
  "extends": [
    "@jm/base",
    "@jm/eslint-config-base/formatting",
    "@jm/ts-for-js",
    "@jm/eslint-config-ts-for-js/formatting"
  ],
  "parserOptions": {
    "project": true,
    "tsconfigRootDir": "__dirname"
  },
  "root": true
}
```

For additional information see: [Linting with Type Information](https://typescript-eslint.io/linting/typed-linting)
