const path = require("path");
const json = require("json-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dataset = require("./src/js/dataset.js");

module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          "html-loader",
          {
            loader: "pug-html-loader",
            options: {
              self: true,
              pretty: true,
              data: {
                info: "./src/js/dataset.js",
              },
            },
          },
        ],
      },
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eat)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      minify: false,
    }),
  ],
};
