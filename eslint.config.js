import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        root: true,
        env: { browser: true, es2020: true },

        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:react-hooks/recommended",
        ],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        ignorePatterns: ["dist", ".eslintrc.cjs"],

        parser: "@typescript-eslint/parser",

        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            "react-refresh/only-export-components": "off",
            "@typescript-eslint/no-unused-vars": "off",
        },
    }
);
