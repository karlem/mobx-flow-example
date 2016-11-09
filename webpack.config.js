const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './index.js',
    html: '../index.html',
  },

  devServer: {
    stats: 'errors-only',
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  plugins: [
    new FlowStatusWebpackPlugin({
      failOnError: true
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
