/* =====================================
    Webpack production config
   ===================================== */

const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require( 'webpack' )
const path = require( 'path' )
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true || { /* CSSNano Options */ }
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      WEBPACK: true
    }),
    new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
})
