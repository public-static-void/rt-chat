import { createRequire } from 'node:module';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

// @typescript-eslint/eslint-plugin's index.js only exports the plugin object,
// losing flatConfigs and parser from raw-plugin. Use the use-at-your-own-risk subpath.
const require = createRequire(import.meta.url);
const tseslintRaw = require('@typescript-eslint/eslint-plugin/use-at-your-own-risk/raw-plugin');

export default [
  // Global ignores (replaces ignorePatterns in legacy config)
  {
    ignores: ['dist/'],
  },

  // TypeScript ESLint recommended (includes parser + parserOptions)
  ...tseslintRaw.flatConfigs['flat/recommended'],

  // React Hooks recommended (flat config preset)
  reactHooksPlugin.configs['recommended-latest'],

  // React Refresh Vite preset (includes allowConstantExport: true)
  reactRefreshPlugin.configs.vite,

  // Custom rules carried over from legacy .eslintrc.cjs
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // Legacy config used "warn" — vite preset defaults to "error"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
