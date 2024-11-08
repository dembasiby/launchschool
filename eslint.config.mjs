import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Apply to these file patterns
    languageOptions: {
      ecmaVersion: "latest", // Specify the ECMAScript version
      sourceType: "module", // Use ES Modules
      globals: {
        console: "readonly", // Allow console as a global
      },
    },
    linterOptions: {
      noInlineConfig: false, // Allow inline ESLint configuration comments
    },
    settings: {
      "eslint.node": {
        globals: ["console"],
        env: {
          browser: true, // Enable browser globals
          node: true, // Enable Node.js globals
        },
      },
    },
    rules: {
      "no-console": "off", // Optionally turn off the no-console rule
    },
  },
];
