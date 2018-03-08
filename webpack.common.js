/* =====================================
    Webpack commmon config
   ===================================== */

const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: {
    app: "./src/client/index"
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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      debounce: ["lodash", "debounce"],
      throttle: ["lodash", "throttle"]
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/"
  }
}
