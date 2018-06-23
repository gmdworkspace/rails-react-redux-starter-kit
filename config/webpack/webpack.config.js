const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: [
    'babel-polyfill',
    path.join(__dirname, '../../app', 'client', 'javascripts', 'index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../../app', 'assets', 'javascripts'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  }
};
