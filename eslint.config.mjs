// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  prettierConfig,
  {
    ignores: [
      '**/node_modules',
      '**/.prettierignore',
      'scripts/**',
      '.expo/**',
      'dist/**',
      'ios/**',
      'android/**',
      '.prettierrc.js',
      'expo-env.d.ts',
      'commitlint.config.js',
      'eslint.config.mjs',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',

      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },

      sourceType: 'module',
    },

    rules: {
      '@typescript-eslint/await-thenable': 'error',
      'array-bracket-newline': [
        'error',
        {
          multiline: true,
        },
      ],

      'array-bracket-spacing': ['error', 'never'],
      'array-callback-return': 'error',
      'arrow-parens': ['error', 'as-needed'],

      'arrow-spacing': [
        'error',
        {
          after: true,
          before: true,
        },
      ],

      'block-spacing': 'error',

      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],

      camelcase: [
        'error',
        {
          properties: 'always',
        },
      ],

      'comma-dangle': [
        'error',
        {
          arrays: 'only-multiline',
          exports: 'never',
          functions: 'ignore',
          imports: 'only-multiline',
          objects: 'only-multiline',
        },
      ],

      'comma-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],

      'computed-property-spacing': ['error', 'never'],
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-location': ['error', 'property'],
      'eol-last': ['error', 'always'],
      eqeqeq: ['error', 'smart'],
      'func-call-spacing': ['error', 'never'],
      'implicit-arrow-linebreak': ['error', 'beside'],
      'jsx-quotes': ['error', 'prefer-single'],

      'key-spacing': [
        'error',
        {
          afterColon: true,
          beforeColon: false,
        },
      ],

      'keyword-spacing': [
        'error',
        {
          after: true,
          before: true,
        },
      ],

      'multiline-ternary': ['error', 'always-multiline'],
      'no-duplicate-imports': ['error'],
      'no-empty-function': 'error',
      'no-mixed-operators': 'error',
      'no-multi-spaces': 'error',

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],

      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: true,
        },
      ],

      'no-var': 'error',
      'no-whitespace-before-property': 'error',

      'object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: true,
        },
      ],

      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],

      'padded-blocks': ['error', 'never'],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: '*',
          prev: ['const', 'let', 'var'],
        },
        {
          blankLine: 'any',
          next: ['const', 'let', 'var', 'directive'],
          prev: ['const', 'let', 'var', 'directive'],
        },
      ],

      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',

      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true,
        },
      ],

      'prefer-object-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-template': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single'],
      'rest-spread-spacing': ['error', 'never'],
      semi: ['error', 'always'],

      'sort-keys': [
        'error',
        'asc',
        {
          caseSensitive: true,
          minKeys: 2,
          natural: false,
        },
      ],

      'sort-vars': 'error',
      'space-before-blocks': 'error',
      'spaced-comment': ['error', 'always'],
      'vars-on-top': 'error',
      yoda: 'error',
    },
  },
);
