const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  }
}
