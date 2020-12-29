const path = require("path");
const CURRENT_WORKING_DIR = process.cwd();
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
  devtool: "source-map",
  entry: [path.join(CURRENT_WORKING_DIR, "/client/index.js")],
  devServer: {
    port: 3000,
    hot: true,
    writeToDisk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Development Mode `,
      template: "./html-template-devclient/index.html",
    }),
  ],
});
