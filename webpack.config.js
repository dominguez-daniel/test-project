const path = require('path');

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
  resolve: {
    extensions: ['.ts', '.js'],
  }
}
