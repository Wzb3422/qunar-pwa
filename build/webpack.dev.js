const path = require('path')
const commonConfig = require('./webpack.common')
const merge = require('webpack-merge');

const { devServerPort } = require('./config')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: devServerPort,
    hot: true,
    quiet: true
  }
})
