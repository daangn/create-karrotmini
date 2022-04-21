module.exports = {
  root: true,
  extends: ["airbnb", "prettier"],
  plugins: ["json-format", "simple-import-sort", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "no-console": "off",
  },
  ignorePatterns: ["**/__generated__/**/*", "**/lib/**/*", "**/dist/**/*"],
};
