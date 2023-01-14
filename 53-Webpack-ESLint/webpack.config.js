const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForJavaScript = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    },
  },
};

const ruleForStyles = {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
};

const ruleForHTML = {
  test: /\.html$/i,
  loader: "html-loader",
}

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [ ruleForJavaScript, ruleForStyles, ruleForHTML ],
  },
  devServer: {
    open: true,
    port: 3000,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
};