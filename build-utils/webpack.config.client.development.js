const path = require("path");
const CURRENT_WORKING_DIR = process.cwd();

function webpackDevServerDevelopment(mode, name) {
  return {
    name,
    devtool: "eval-source-map",
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
    },
  };
}

module.exports = webpackDevServerDevelopment;
