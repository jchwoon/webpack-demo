const newLocal = "latest";
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: newLocal,
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
  },
};
