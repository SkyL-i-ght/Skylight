const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'frontend', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|svg|jpe?g|gif)$/i,
      loader: 'file-loader',
  },
    ]
  },

devServer: {
  static: {
    directory: path.resolve(__dirname, './build'),
    publicPath: path.resolve(__dirname, './build'),
  },
  port: 8080,
  proxy: {
    '/api': 'http://localhost:3000'
  }
},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'frontend', 'index.html')
    })
  ], 
};