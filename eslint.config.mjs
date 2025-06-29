import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
// const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      'no-console': 'warn',
    },
  },
  {
    ignores: ['**/.env/', '**/dist/', '**/node_modules/'],
  },
  tseslint.configs.recommended,
  // eslintPluginPrettierRecommended,
]);
