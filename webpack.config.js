const CopyPlugin = require("copy-webpack-plugin");
const WebpackChromeExtensionPlugin = require("webpack-chrome-extension-plugin");

module.exports = {
  entry: {
    background: "./background.js",
    popup: "./popup.js",
    content: "./content.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: ".", context: "public" }],
    }),
    new WebpackChromeExtensionPlugin(),
  ],
};
