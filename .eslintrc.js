module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    semi: ["error", "always"],
  },
};
