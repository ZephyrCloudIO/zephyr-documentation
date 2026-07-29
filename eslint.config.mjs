import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  {
    files: [
      'scripts/**/*.mjs',
      'fixtures/rsbuild-react-mf-monorepo/**/*.{ts,mjs}',
    ],
    languageOptions: { globals: globals.node },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    ignores: [
      'doc_build/',
      '.nx/',
      'fixtures/**/.mf/',
      'fixtures/**/@mf-types/',
      'fixtures/**/dist/',
      'fixtures/**/node_modules/',
      'fixtures/**/playwright-report/',
      'fixtures/**/test-results/',
    ],
  },
];
