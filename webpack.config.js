const path = require('path');

module.exports = {
  // Webpack defaults
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    // You could use a hash in the filename to bust the cache.
    // If we use a hash, we need to use the HtmlWebpackPlugin to generate the HTML files.
    // filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Loaders
  module: {
    rules: [
      // 👇 The babel-loader is used to transpile JavaScript to an older version.
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

      // 👇 The css-loader enables loading CSS files in our JS, while the style loader injects
      // them into the Document when the JS is loaded.
      // {
      //   test: /\.css$/,
      //   // Loaders are executed from right to left (order is important)
      //   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      // },
    ]
  },

  // 👇 A source map is a file that provides a mapping between the source code and 
  // the generated/bundled code.
  devtool: false, // 'source-map'

  // We can set the mode to 'development' or 'production'.
  // This has the same effect as providing the --mode option in the command line.
  // mode: 'development' || 'production',
};