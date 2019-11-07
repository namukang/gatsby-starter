const path = require('path');

function onCreateWebpackConfig({ actions }) {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },
  });
}

module.exports = onCreateWebpackConfig;
