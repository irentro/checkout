const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  watch: true,
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.css$/, use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
      ]}]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};