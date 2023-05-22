/**
 * @file ESLint configuration for linting JavaScript with [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint).
 * @author Johan Meester
 * @see LICENSE file in root directory for full license.
 */

/* eslint-env node */

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = Object.freeze({
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', '@shopify'],

  reportUnusedDisableDirectives: true,

  rules: Object.freeze({
    // #region ESLint Core Rules

    /*
     * Disallow async functions which have no `await` expression.
     * https://eslint.org/docs/rules/require-await
     * Type: Suggestion
     * NOTE: Handled by `@typescript-eslint/require-await`
     */
    'require-await': OFF,

    /*
     * Disallow unnecessary `return await`.
     * https://eslint.org/docs/rules/no-return-await
     * Type: Suggestion
     * NOTE: Handled by `@typescript-eslint/return-await`
     */
    'no-return-await': OFF,

    /*
     * Disallow throwing literals as exceptions.
     * https://eslint.org/docs/rules/no-throw-literal
     * Type: Suggestion
     * NOTE: Handled by `@typescript-eslint/no-throw-literalt`
     */
    'no-throw-literal': OFF,

    /*
     * Disallow `void` operators.
     * https://eslint.org/docs/rules/no-void
     * Type: Suggestion
     */
    'no-void': [ERROR, { allowAsStatement: true }],

    // #endregion ESLint Core Rules

    // #region PLUGINS

    // #region @typescript-eslint

    /*
     * Require that function overload signatures be consecutive.
     * https://typescript-eslint.io/rules/adjacent-overload-signatures
     * Recommended
     */
    '@typescript-eslint/adjacent-overload-signatures': OFF,

    /*
     * Require consistently using either `T[]` or `Array<T>` for arrays.
     * https://typescript-eslint.io/rules/array-type
     * Strict
     */
    '@typescript-eslint/array-type': OFF,

    /*
     * Disallow awaiting a value that is not a Thenable.
     * https://typescript-eslint.io/rules/await-thenable
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/await-thenable': ERROR,

    /*
     * Disallow `@ts-<directive>` comments or require descriptions after
     * directives.
     * https://typescript-eslint.io/rules/ban-ts-comment
     * Recommended
     */
    '@typescript-eslint/ban-ts-comment': ERROR,

    /*
     * Disallow `// tslint:<rule-flag>` comments.
     * https://typescript-eslint.io/rules/ban-tslint-comment
     * Strict
     */
    '@typescript-eslint/ban-tslint-comment': ERROR,

    /*
     * Disallow certain types.
     * https://typescript-eslint.io/rules/ban-types
     * Recommended
     */
    '@typescript-eslint/ban-types': OFF,

    /*
     * Enforce that literals on classes are exposed in a consistent style.
     * https://typescript-eslint.io/rules/class-literal-property-style
     * Strict
     */
    '@typescript-eslint/class-literal-property-style': OFF,

    /*
     * Enforce specifying generic type arguments on type annotation or
     * constructor name of a constructor call.
     * https://typescript-eslint.io/rules/consistent-generic-constructors
     * Strict
     */
    '@typescript-eslint/consistent-generic-constructors': OFF,

    /*
     * Require or disallow the `Record` type.
     * https://typescript-eslint.io/rules/consistent-indexed-object-style
     * Strict
     */
    '@typescript-eslint/consistent-indexed-object-style': OFF,

    /*
     * Enforce consistent usage of type assertions.
     * https://typescript-eslint.io/rules/consistent-type-assertions
     * Strict
     */
    '@typescript-eslint/consistent-type-assertions': OFF,

    /*
     * Enforce type definitions to consistently use either `interface` or `type`.
     * https://typescript-eslint.io/rules/consistent-type-definitions
     * Strict
     */
    '@typescript-eslint/consistent-type-definitions': OFF,

    /*
     * Enforce consistent usage of type exports.
     * https://typescript-eslint.io/rules/consistent-type-exports
     */
    '@typescript-eslint/consistent-type-exports': OFF,

    /*
     * Enforce consistent usage of type imports.
     * https://typescript-eslint.io/rules/consistent-type-imports
     */
    '@typescript-eslint/consistent-type-imports': OFF,

    /*
     * Require explicit return types on functions and class methods.
     * https://typescript-eslint.io/rules/explicit-function-return-type
     */
    '@typescript-eslint/explicit-function-return-type': OFF,

    /*
     * Require explicit accessibility modifiers on class properties and methods.
     * https://typescript-eslint.io/rules/explicit-member-accessibility
     */
    '@typescript-eslint/explicit-member-accessibility': OFF,

    /*
     * Require explicit return and argument types on exported functions' and
     * classes' public class methods.
     * https://typescript-eslint.io/rules/explicit-module-boundary-types
     */
    '@typescript-eslint/explicit-module-boundary-types': OFF,

    /*
     * Require `.toString()` to only be called on objects which provide useful
     * information when stringified.
     * https://typescript-eslint.io/rules/no-base-to-string
     * Strict
     */
    '@typescript-eslint/no-base-to-string': WARN,

    /*
     * Disallow non-null assertion in locations that may be confusing.
     * https://typescript-eslint.io/rules/no-confusing-non-null-assertion
     * Strict
     */
    '@typescript-eslint/no-confusing-non-null-assertion': OFF,

    /*
     * Require expressions of type void to appear in statement position.
     * https://typescript-eslint.io/rules/no-confusing-void-expression
     */
    '@typescript-eslint/no-confusing-void-expression': OFF,

    /*
     * Disallow duplicate enum member values.
     * https://typescript-eslint.io/rules/no-duplicate-enum-values
     * Strict
     */
    '@typescript-eslint/no-duplicate-enum-values': OFF,

    /*
     * Disallow duplicate constituents of union or intersection types.
     * https://typescript-eslint.io/rules/no-duplicate-type-constituents
     */
    '@typescript-eslint/no-duplicate-type-constituents': OFF,

    /*
     * Disallow using the `delete` operator on computed key expressions.
     * https://typescript-eslint.io/rules/no-dynamic-delete
     * Strict
     */
    '@typescript-eslint/no-dynamic-delete': WARN,

    /*
     * Disallow the declaration of empty interfaces.
     * https://typescript-eslint.io/rules/no-empty-interface
     * Recommended
     */
    '@typescript-eslint/no-empty-interface': OFF,

    /*
     * Disallow the `any` type.
     * https://typescript-eslint.io/rules/no-explicit-any
     * Recommended
     */
    '@typescript-eslint/no-explicit-any': OFF,

    /*
     * Disallow extra non-null assertions.
     * https://typescript-eslint.io/rules/no-extra-non-null-assertion
     * Recommended
     */
    '@typescript-eslint/no-extra-non-null-assertion': OFF,

    /*
     * Disallow classes used as namespaces.
     * https://typescript-eslint.io/rules/no-extraneous-class
     * Strict
     */
    '@typescript-eslint/no-extraneous-class': WARN,

    /*
     * Require Promise-like statements to be handled appropriately.
     * https://typescript-eslint.io/rules/no-floating-promises
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-floating-promises': ERROR,

    /*
     * Disallow iterating over an array with a for-in loop.
     * https://typescript-eslint.io/rules/no-for-in-array
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-for-in-array': ERROR,

    /*
     * Disallow usage of the implicit `any` type in catch clauses.
     * https://typescript-eslint.io/rules/no-implicit-any-catch
     */
    '@typescript-eslint/no-implicit-any-catch': OFF,

    /*
     * Enforce the use of top-level import type qualifier when an import only
     * has specifiers with inline type qualifiers.
     * https://typescript-eslint.io/rules/no-import-type-side-effects
     */
    '@typescript-eslint/no-import-type-side-effects': OFF,

    /*
     * Disallow explicit type declarations for variables or parameters
     * initialized to a number, string, or boolean.
     * https://typescript-eslint.io/rules/no-inferrable-types
     * Recommended
     */
    '@typescript-eslint/no-inferrable-types': OFF,

    /*
     * Disallow `void` type outside of generic or return types.
     * https://typescript-eslint.io/rules/no-invalid-void-type
     * Strict
     */
    '@typescript-eslint/no-invalid-void-type': OFF,

    /*
     * Disallow the `void` operator except when used to discard a value.
     * https://typescript-eslint.io/rules/no-meaningless-void-operator
     * Strict
     */
    '@typescript-eslint/no-meaningless-void-operator': OFF,

    /*
     * Enforce valid definition of `new` and `constructor`.
     * https://typescript-eslint.io/rules/no-misused-new
     * Recommended
     */
    '@typescript-eslint/no-misused-new': ERROR,

    /*
     * Disallow Promises in places not designed to handle them.
     * https://typescript-eslint.io/rules/no-misused-promises
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-misused-promises': ERROR,

    /*
     * Disallow enums from having both number and string members.
     * https://typescript-eslint.io/rules/no-mixed-enums
     * Strict
     */
    '@typescript-eslint/no-mixed-enums': OFF,

    /*
     * Disallow TypeScript namespaces.
     * https://typescript-eslint.io/rules/no-namespace
     * Recommended
     */
    '@typescript-eslint/no-namespace': OFF,

    /*
     * Disallow non-null assertions in the left operand of a nullish coalescing
     * operator.
     * https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
     * Strict
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': OFF,

    /*
     * Disallow non-null assertions after an optional chain expression.
     * https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
     * Recommended
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': OFF,

    /*
     * Disallow non-null assertions using the `!` postfix operator.
     * https://typescript-eslint.io/rules/no-non-null-assertion
     * Recommended
     */
    '@typescript-eslint/no-non-null-assertion': OFF,

    /*
     * Disallow the use of parameter properties in class constructors.
     * https://typescript-eslint.io/rules/no-parameter-properties
     */
    '@typescript-eslint/no-parameter-properties': OFF,

    /*
     * Disallow members of unions and intersections that do nothing or override
     * type information.
     * https://typescript-eslint.io/rules/no-redundant-type-constituents
     */
    '@typescript-eslint/no-redundant-type-constituents': OFF,

    /*
     * Disallow invocation of `require()`.
     * https://typescript-eslint.io/rules/no-require-imports
     */
    '@typescript-eslint/no-require-imports': OFF,

    /*
     * Disallow aliasing `this`.
     * https://typescript-eslint.io/rules/no-this-alias
     * Recommended
     */
    '@typescript-eslint/no-this-alias': ERROR,

    /*
     * Disallow type aliases.
     * https://typescript-eslint.io/rules/no-type-alias
     */
    '@typescript-eslint/no-type-alias': OFF,

    /*
     * Disallow unnecessary equality comparisons against boolean literals.
     * https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
     * Strict
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': WARN,

    /*
     * Disallow conditionals where the type is always truthy or always falsy.
     * https://typescript-eslint.io/rules/no-unnecessary-condition
     * Strict
     */
    '@typescript-eslint/no-unnecessary-condition': OFF,

    /*
     * Disallow unnecessary namespace qualifiers.
     * https://typescript-eslint.io/rules/no-unnecessary-qualifier
     */
    '@typescript-eslint/no-unnecessary-qualifier': OFF,

    /*
     * Disallow type arguments that are equal to the default.
     * https://typescript-eslint.io/rules/no-unnecessary-type-arguments
     * Strict
     */
    '@typescript-eslint/no-unnecessary-type-arguments': OFF,

    /*
     * Disallow type assertions that do not change the type of an expression.
     * https://typescript-eslint.io/rules/no-unnecessary-type-assertion
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-unnecessary-type-assertion': OFF,

    /*
     * Disallow unnecessary constraints on generic types.
     * https://typescript-eslint.io/rules/no-unnecessary-type-constraint
     * Recommended
     */
    '@typescript-eslint/no-unnecessary-type-constraint': OFF,

    /*
     * Disallow calling a function with a value with type `any`.
     * https://typescript-eslint.io/rules/no-unsafe-argument
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-unsafe-argument': OFF,

    /*
     * Disallow assigning a value with type `any` to variables and properties.
     * https://typescript-eslint.io/rules/no-unsafe-assignment
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-unsafe-assignment': OFF,

    /*
     * Disallow calling a value with type `any`.
     * https://typescript-eslint.io/rules/no-unsafe-call
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-unsafe-call': OFF,

    /*
     * Disallow unsafe declaration merging.
     * https://typescript-eslint.io/rules/no-unsafe-declaration-merging
     * Strict
     */
    '@typescript-eslint/no-unsafe-declaration-merging': OFF,

    /*
     * Disallow comparing an enum value with a non-enum value.
     * https://typescript-eslint.io/rules/no-unsafe-enum-comparison
     * Strict
     */
    '@typescript-eslint/no-unsafe-enum-comparison': OFF,

    /*
     * Disallow member access on a value with type `any`.
     * https://typescript-eslint.io/rules/no-unsafe-member-access
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-unsafe-member-access': OFF,

    /*
     * Disallow returning a value with type `any` from a function.
     * https://typescript-eslint.io/rules/no-unsafe-return
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-unsafe-return': OFF,

    /*
     * Disallow empty exports that don't change anything in a module file.
     * https://typescript-eslint.io/rules/no-useless-empty-export
     */
    '@typescript-eslint/no-useless-empty-export': OFF,

    /*
     * Disallow `require` statements except in import statements.
     * https://typescript-eslint.io/rules/no-var-requires
     * Recommended
     */
    '@typescript-eslint/no-var-requires': OFF,

    /*
     * Enforce non-null assertions over explicit type casts.
     * https://typescript-eslint.io/rules/non-nullable-type-assertion-style
     * Strict
     */
    '@typescript-eslint/non-nullable-type-assertion-style': OFF,

    /*
     * Require or disallow parameter properties in class constructors.
     * https://typescript-eslint.io/rules/parameter-properties
     */
    '@typescript-eslint/parameter-properties': OFF,

    /*
     * Enforce the use of `as const` over literal type.
     * https://typescript-eslint.io/rules/prefer-as-const
     * Recommended
     */
    '@typescript-eslint/prefer-as-const': OFF,

    /*
     * Require each enum member value to be explicitly initialized.
     * https://typescript-eslint.io/rules/prefer-enum-initializers
     */
    '@typescript-eslint/prefer-enum-initializers': OFF,

    /*
     * Enforce the use of `for-of` loop over the standard `for` loop where
     * possible.
     * https://typescript-eslint.io/rules/prefer-for-of
     * Strict
     */
    '@typescript-eslint/prefer-for-of': OFF,

    /*
     * Enforce using function types instead of interfaces with call signatures.
     * https://typescript-eslint.io/rules/prefer-function-type
     * Strict
     */
    '@typescript-eslint/prefer-function-type': OFF,

    /*
     * Enforce `includes` method over `indexOf` method.
     * https://typescript-eslint.io/rules/prefer-includes
     * Strict
     */
    '@typescript-eslint/prefer-includes': OFF,

    /*
     * Require all enum members to be literal values.
     * https://typescript-eslint.io/rules/prefer-literal-enum-member
     * Strict
     */
    '@typescript-eslint/prefer-literal-enum-member': OFF,

    /*
     * Require using `namespace` keyword over `module` keyword to declare custom
     * TypeScript modules.
     * https://typescript-eslint.io/rules/prefer-namespace-keyword
     * Recommended
     */
    '@typescript-eslint/prefer-namespace-keyword': OFF,

    /*
     * Enforce using the nullish coalescing operator instead of logical chaining.
     * https://typescript-eslint.io/rules/prefer-nullish-coalescing
     * Strict
     */
    '@typescript-eslint/prefer-nullish-coalescing': OFF,

    /*
     * Enforce using concise optional chain expressions instead of chained
     * logical ands, negated logical ors, or empty objects.
     * https://typescript-eslint.io/rules/prefer-optional-chain
     * Strict
     */
    '@typescript-eslint/prefer-optional-chain': OFF,

    /*
     * Require private members to be marked as `readonly` if they're never
     * modified outside of the constructor.
     * https://typescript-eslint.io/rules/prefer-readonly
     */
    '@typescript-eslint/prefer-readonly': OFF,

    /*
     * Require function parameters to be typed as `readonly` to prevent
     * accidental mutation of inputs.
     * https://typescript-eslint.io/rules/prefer-readonly-parameter-types
     */
    '@typescript-eslint/prefer-readonly-parameter-types': OFF,

    /*
     * Enforce using type parameter when calling `Array#reduce` instead of
     * casting.
     * https://typescript-eslint.io/rules/prefer-reduce-type-parameter
     * Strict
     */
    '@typescript-eslint/prefer-reduce-type-parameter': OFF,

    /*
     * Enforce `RegExp#exec` over `String#match` if no global flag is provided.
     * https://typescript-eslint.io/rules/prefer-regexp-exec
     */
    '@typescript-eslint/prefer-regexp-exec': OFF,

    /*
     * Enforce that `this` is used when only `this` type is returned.
     * https://typescript-eslint.io/rules/prefer-return-this-type
     * Strict
     */
    '@typescript-eslint/prefer-return-this-type': OFF,

    /*
     * Enforce using `String#startsWith` and `String#endsWith` over other
     * equivalent methods of checking substrings.
     * https://typescript-eslint.io/rules/prefer-string-starts-ends-with
     * Strict
     */
    '@typescript-eslint/prefer-string-starts-ends-with': OFF,

    /*
     * Enforce using `@ts-expect-error` over `@ts-ignore`.
     * https://typescript-eslint.io/rules/prefer-ts-expect-error
     * Strict
     */
    '@typescript-eslint/prefer-ts-expect-error': OFF,

    /*
     * Require any function or method that returns a Promise to be marked async.
     * https://typescript-eslint.io/rules/promise-function-async
     */
    '@typescript-eslint/promise-function-async': OFF,

    /*
     * Require `Array#sort` calls to always provide a `compareFunction`.
     * https://typescript-eslint.io/rules/require-array-sort-compare
     */
    '@typescript-eslint/require-array-sort-compare': OFF,

    /*
     * Require both operands of addition to be the same type and be `bigint`,
     * `number`, or `string`.
     * https://typescript-eslint.io/rules/restrict-plus-operands
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/restrict-plus-operands': OFF,

    /*
     * Enforce template literal expressions to be of `string` type.
     * https://typescript-eslint.io/rules/restrict-template-expressions
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/restrict-template-expressions': [
      WARN,
      {
        allowNumber: true,
        allowAny: true
      }
    ],

    /*
     * Disallow certain types in boolean expressions.
     * https://typescript-eslint.io/rules/strict-boolean-expressions
     */
    '@typescript-eslint/strict-boolean-expressions': OFF,

    /*
     * Require switch-case statements to be exhaustive with union type.
     * https://typescript-eslint.io/rules/switch-exhaustiveness-check
     */
    '@typescript-eslint/switch-exhaustiveness-check': OFF,

    /*
     * Disallow certain triple slash directives in favor of ES6-style import
     * declarations.
     * https://typescript-eslint.io/rules/triple-slash-reference
     * Recommended
     */
    '@typescript-eslint/triple-slash-reference': OFF,

    /*
     * Require type annotations in certain places.
     * https://typescript-eslint.io/rules/typedef
     *
     */
    '@typescript-eslint/typedef': OFF,

    /*
     * Enforce unbound methods are called with their expected scope.
     * https://typescript-eslint.io/rules/unbound-method
     * Recommended
     */
    '@typescript-eslint/unbound-method': ERROR,

    /*
     * Disallow two overloads that could be unified into one with a union or an
     * optional/rest parameter.
     * https://typescript-eslint.io/rules/unified-signatures
     * Strict
     */
    '@typescript-eslint/unified-signatures': OFF,

    // #endregion @typescript-eslint

    // #region @typescript-eslint->Extension Rules

    /*
     * Enforce default parameters to be last.
     * https://typescript-eslint.io/rules/default-param-last
     */
    '@typescript-eslint/default-param-last': OFF,

    /*
     * Enforce dot notation whenever possible.
     * https://typescript-eslint.io/rules/dot-notation
     * Strict
     */
    '@typescript-eslint/dot-notation': OFF,

    /*
     * Require or disallow initialization in variable declarations.
     * https://typescript-eslint.io/rules/init-declarations
     */
    '@typescript-eslint/init-declarations': OFF,

    /*
     * Disallow generic `Array` constructors.
     * https://typescript-eslint.io/rules/no-array-constructor
     * Recommended
     */
    '@typescript-eslint/no-array-constructor': OFF,

    /*
     * Disallow duplicate class members.
     * https://typescript-eslint.io/rules/no-dupe-class-members
     *
     */
    '@typescript-eslint/no-dupe-class-members': OFF,

    /*
     * Disallow duplicate imports.
     * https://typescript-eslint.io/rules/no-duplicate-imports
     *
     */
    '@typescript-eslint/no-duplicate-imports': OFF,

    /*
     * Disallow empty functions.
     * https://typescript-eslint.io/rules/no-empty-function
     * Recommended
     */
    '@typescript-eslint/no-empty-function': OFF,

    /*
     * Disallow the use of `eval()`-like methods.
     * https://typescript-eslint.io/rules/no-implied-eval
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/no-implied-eval': ERROR,

    /*
     * Disallow `this` keywords outside of classes or class-like objects.
     * https://typescript-eslint.io/rules/no-invalid-this
     */
    '@typescript-eslint/no-invalid-this': OFF,

    /*
     * Disallow function declarations that contain unsafe references inside loop
     * statements.
     * https://typescript-eslint.io/rules/no-loop-func
     */
    '@typescript-eslint/no-loop-func': OFF,

    /*
     * Disallow literal numbers that lose precision.
     * https://typescript-eslint.io/rules/no-loss-of-precision
     * Recommended
     */
    '@typescript-eslint/no-loss-of-precision': OFF,

    /*
     * Disallow magic numbers.
     * https://typescript-eslint.io/rules/no-magic-numbers
     */
    '@typescript-eslint/no-magic-numbers': OFF,

    /*
     * Disallow variable redeclaration.
     * https://typescript-eslint.io/rules/no-redeclare
     */
    '@typescript-eslint/no-redeclare': OFF,

    /*
     * Disallow specified modules when loaded by `import`.
     * https://typescript-eslint.io/rules/no-restricted-imports
     */
    '@typescript-eslint/no-restricted-imports': OFF,

    /*
     * Disallow variable declarations from shadowing variables declared in the
     * outer scope.
     * https://typescript-eslint.io/rules/no-shadow
     *
     */
    '@typescript-eslint/no-shadow': OFF,

    /*
     * Disallow throwing literals as exceptions.
     * https://typescript-eslint.io/rules/no-throw-literal
     * Strict
     */
    '@typescript-eslint/no-throw-literal': OFF,

    /*
     * Disallow unused expressions.
     * https://typescript-eslint.io/rules/no-unused-expressions
     */
    '@typescript-eslint/no-unused-expressions': OFF,

    /*
     * Disallow unused variables.
     * https://typescript-eslint.io/rules/no-unused-vars
     * Recommended
     */
    '@typescript-eslint/no-unused-vars': OFF,

    /*
     * Disallow the use of variables before they are defined.
     * https://typescript-eslint.io/rules/no-use-before-define
     */
    '@typescript-eslint/no-use-before-define': OFF,

    /*
     * Disallow unnecessary constructors.
     * https://typescript-eslint.io/rules/no-useless-constructor
     * Strict
     */
    '@typescript-eslint/no-useless-constructor': OFF,

    /*
     * Disallow async functions which have no `await` expression.
     * https://typescript-eslint.io/rules/require-await
     * Recommended
     * Requires type checking
     */
    '@typescript-eslint/require-await': ERROR,

    /*
     * Enforce consistent returning of awaited values.
     * https://typescript-eslint.io/rules/return-await
     */
    '@typescript-eslint/return-await': [ERROR, 'always'],

    // #endregion @typescript-eslint->Extension Rules

    // #region @shopify

    /*
     * Prevent the declaration of classes consisting only of static members.
     * https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/docs/rules/no-fully-static-classes.md
     */
    '@shopify/no-fully-static-classes': ERROR,

    /*
     * Prefer class properties to assignment of literals in constructors.
     * https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/docs/rules/prefer-class-properties.md
     */
    '@shopify/prefer-class-properties': WARN

    // #endregion @shopify

    // #endregion PLUGINS
  })
});
