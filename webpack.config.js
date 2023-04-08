/** @format */
const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: { Bundle: resolve(__dirname, "src/index.js") },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Generate Jokes",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
