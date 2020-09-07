const path = require('path');

module.exports = {
  mode: 'production',
  // entry: ['babel-polyfill', './client/hydrate.js'],
  entry: ['./client/hydrate.js'],
  // entry: {
  //   // website: './client/index.js',
  //   'babel-polyfill': 'babel-polyfill',
  //   hydrate: './client/hydrate.js',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hydrate.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['babel-plugin-styled-components'],
        }
      }
    ],
  },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  //   'styled-components': 'styled',
  // }
}
