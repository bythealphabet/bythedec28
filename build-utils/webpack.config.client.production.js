const path = require("path");

const CURRENT_WORKING_DIR = process.cwd();

function webpackClientProduction(mode, name) {
  return {
    name,
    entry: [path.join(CURRENT_WORKING_DIR, "/client/index.js")],
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
    },
  };
}

module.exports = webpackClientProduction;
