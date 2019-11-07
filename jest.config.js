module.exports = {
  // Used to locate test files and source files, including manual mocks for modules from node_modules (__mocks__ needs to lives in one of the roots)
  roots: ['<rootDir>', '<rootDir>/tests'],

  // Transform source files
  transform: {
    // Tell Jest to use babel-jest since Gatsby handles its own Babel configuration
    '^.+\\.[jt]sx?$': '<rootDir>/tests/jest-preprocess.js',
  },

  // Resolve modules in the same way as webpack
  // Should mirror resolve.modules setting in gatsby/onCreateWebpackConfig.js
  moduleDirectories: ['<rootDir>/src', 'node_modules'],

  // Mock static assets
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/file-mock.ts',
  },

  // Skip tests that match these patterns
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],

  // Don't transform node_modules except for gatsby (gatsby includes un-transpiled ES6 code)
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],

  globals: {
    // Needed by some Gatsby components
    __PATH_PREFIX__: '',
  },

  // Required by Gatsby
  setupFiles: ['<rootDir>/tests/loadershim.js'],
};
