/* =====================================
    Webpack production config
   ===================================== */

const merge = require("webpack-merge")
const common = require("./webpack.common")
const webpack = require("webpack")
const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const nodeExternals = require("webpack-node-externals")

module.exports = [merge(common, {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                minimize: true || { /* CSSNano Options */ }
              }
            },
            "postcss-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      WEBPACK: true
    }),
    new ExtractTextPlugin({
      filename: "styles.css",
      allChunks: true
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
}), {
  // context: __dirname,
  target: "node",
  externals: [nodeExternals()],
  node: {
    __dirname: true
  },
  entry: {
    server: "./server/index"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      WEBPACK: false
    })
  ],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, 'dist')
  }
}]
