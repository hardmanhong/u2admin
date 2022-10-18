const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const paths = require('./paths');

const config = merge(common, {
  mode: 'production',
});

module.exports = config;
