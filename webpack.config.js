const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './server.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise build fails
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
