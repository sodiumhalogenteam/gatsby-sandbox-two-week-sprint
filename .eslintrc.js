module.exports = {
  extends: ['airbnb', 'plugin:react-redux/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/react'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['jsx-a11y', 'react', 'react-redux', 'prettier', 'jest', 'react-hooks'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'prettier/prettier': ['error'],
    'react/prefer-stateless-function': 0,
    'react-redux/prefer-separate-component-file': 0,
    'jsx-a11y/anchor-is-valid': ['error', {components: ['Link'], specialLink: ['to']}],
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/button-has-type': ['off'],
    'react/jsx-no-bind': [
      'warn',
      {
        allowArrowFunctions: false,
      },
    ],
    'react/forbid-prop-types': ['off'],
    'jsx-a11y/no-autofocus': 0,
  },
};
