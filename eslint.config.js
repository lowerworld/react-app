import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      react.configs.flat["recommended"],
      react.configs.flat["jsx-runtime"],
      compat.plugins("eslint-plugin-react-hooks"),
      reactRefresh.configs.recommended,
    ],
    rules: {
      eqeqeq: "warn",
      "no-warning-comments": "warn",
      "object-shorthand": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: { version: "detect" },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true },
      ],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { extends: [prettier] },
  { ignores: ["dist/"] },
);
