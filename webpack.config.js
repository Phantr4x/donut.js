var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'donut': './donut.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname)
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    port: 8080
  },
  module: {
    rules: [{
      test: /.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }]
  }
};
