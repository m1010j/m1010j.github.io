const path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: [/\.js?$/],
        use: { loader: 'babel-loader' },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*'],
  },
};
