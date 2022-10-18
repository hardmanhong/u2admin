const paths = require('./paths');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    app: `${paths.src}/index.tsx`
  },
  output: {
    path: paths.build,
    publicPath: isDev ? '/' : './',
    filename: isDev
      ? 'static/js/bundle.js'
      : 'static/js/[name].[contenthash:8].js',
    chunkFilename: isDev
      ? 'static/js/[name].chunk.js'
      : 'static/js/[name].[contenthash:8].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@/src': path.resolve('./src')
    }
  }
};
module.exports = config;
