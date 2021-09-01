const path = require('path');

module.exports = {
  // mode: 'development' || 'production',
  // Webpack defaults
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Loaders
  module: {
    rules: [
      // babel-loader to transpile js to an older version
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },

      // css-loader enables loading css fiels in our JS, style loader injects 
      // them into the Document when the JS is loader
      // {
      //   test: /\.css$/,
      //   // Loaders are executed from right to left (order is important)
      //   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      // },
    ]
  },
  devtool: false, // 'source-map'
  devServer: {
    hot: false, // true
  },
};