module.exports = {
  settings: {
    "import/resolver": {
      webpack: {
        // ensure eslint knows about our modules in /src
        config: "./webpack/common.js"
      }
    }
  },
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "react-hooks",
    "unicorn"
  ],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true }
    ],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true }
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true }
    ],
    // Common abbreviations are fine
    "unicorn/prevent-abbreviations": "off",
    // keep things consistent and readable
    "no-multi-spaces": "error",
    // keep things consistent and readable
    "object-curly-spacing": ["error", "always"],
    // import/order doesn't seem to have a plugin supporting all the rules it has; alphabetizing is enough
    "sort-imports": "error",
    "import/order": "off",
    // kebab-case is absolutely disgusting
    "unicorn/filename-case": [
      "error",
      {
        case: "camelCase"
      }
    ],
    // petty but im an old man and I have my ways
    "newline-after-var": ["error", "always"],
    // nice for hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // makes merging easier
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "never",
        functions: "never"
      }
    ]
  }
};
