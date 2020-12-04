const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./client/app.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-website.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.tsx?$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          plugins: ['babel-plugin-styled-components'],
        }
      }
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
}
