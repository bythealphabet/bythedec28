const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CURRENT_WORKING_DIR = process.cwd();

module.exports = () => ({
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR, "/client/index.js"),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
