const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  // entry
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    resolve(__dirname, './src/main.js')
  ], // string, object, array

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  }, // object
  
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    port: 4000,
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: resolve(__dirname, 'src'),
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};