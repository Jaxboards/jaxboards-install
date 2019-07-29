module.exports = {
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  plugins: ["prettier", "jest", "import"],
  rules: {
    "no-plusplus": 0
  }
};
