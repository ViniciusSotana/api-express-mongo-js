import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


[
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    env: {
      node: true,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);