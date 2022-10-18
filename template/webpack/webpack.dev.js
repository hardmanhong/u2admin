const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const paths = require('./paths');

const config = merge(common, {
  mode: 'development',
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true,
    client: {
      logging: 'error',
      progress: true,
      overlay: {
        errors: true,
        warnings: false
      }
    },
    static: {
      directory: paths.public
    },
    compress: true,
    open: true,
    hot: true,
    proxy: {
        '/api':{
            target:'',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
  }
});

module.exports = config;
