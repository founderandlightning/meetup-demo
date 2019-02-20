module.exports = {
  hooks: {
    "pre-commit": "lint-staged && npm test",
     "pre-commit": "npm test"
  }
};
