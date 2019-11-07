module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    // Use config from create-react-app: https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app
    'react-app',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'react-app'],
    },
  ],
};
