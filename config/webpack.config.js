const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[id].js",
    path: path.resolve(__dirname, "../dist"), // 这个地址相对 当前文件目录
  },
  devtool: "cheap-module-source-map", // 默认 eval  看不了源代码
  // devtool: "eval-cheap-module-source-map", // 默认 eval  看不了源代码
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          include: [resolveApp("src")],
          exclude: [
            /node_modules[\\\/]core-js/,
            /node_modules[\\\/]webpack[\\\/]buildin/,
          ],
        },
      },
      {
        test: /\.(le|c|sc|sa)ss$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        lodash: {
          test: /[\\/]node_modules[\\/](lodash)[\\/]/,
          name: "lodash",
          chunks: "all",
          enforce: true,
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd\-mobile[\\/]/,
          name: "antd",
          chunks: "all",
          enforce: true,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react\-dom)[\\/]/,
          name: "react",
          chunks: "all",
          enforce: true,
        },
        swiper: {
          test: /[\\\/]node_modules[\\\/](swiper|dom7|react\-id\-swiper)[\\/]/,
          name: "swiper",
          chunks: "all",
          enforce: true,
        },
        moment: {
          test: /[\\\/]node_modules[\\\/]moment[\\\/]/,
          name: "moment",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.IgnorePlugin(/^(react|react-dom)/), // 测试 IgnorePlugin 使用
    // new CopyWebpackPlugin({ patterns: [{ from: "vendor/**/*" }] }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp("public/index.html"),
      minify: false,
    }),
     new BundleAnalyzerPlugin({
      analyzerPort: 520
     })
  ],
};
