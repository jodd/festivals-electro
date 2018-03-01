/* =====================================
    Webpack development config
   ===================================== */

const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?noInfo=false',
      './src/index.js'
    ]
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      WEBPACK: true
    })
  ]
})
