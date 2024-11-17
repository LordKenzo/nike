import prettierRecommended from 'eslint-plugin-prettier/recommended'
import { default as react, default as reactPlugin } from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import sonarjs from 'eslint-plugin-sonarjs'
import globals from 'globals'

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2021,
      },
    },
    settings: { react: { version: '18.2' } },
  },
  reactPlugin.configs.flat.recommended,
  prettierRecommended,
  sonarjs.configs.recommended,
  {
    ignores: ['dist', '.eslint.config.js', '*.js'],
    plugins: {
      react,
      'react-hooks': hooksPlugin,
      'react-refresh': reactRefresh,
    },
    rules: {
      'no-console': 'warn',
      'sonarjs/prefer-immediate-return': 'error',
      'prettier/prettier': [
        'error',
        {
          semi: false,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          useTabs: false,
        },
      ],

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 'off',
    },
  },
]

/*export default[{
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'prefer-arrow-callback': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": 0
  },
}]*/
