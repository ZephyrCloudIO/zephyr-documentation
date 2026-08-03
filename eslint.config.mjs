import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: { globals: globals.node },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  { ignores: ['doc_build/', '.nx/'] },
];
