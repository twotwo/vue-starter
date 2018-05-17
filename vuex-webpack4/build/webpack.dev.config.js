const webpack = require("webpack")
const merge = require("webpack-merge")
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
//
const HappyPack = require("happypack")
const getHappyPackConfig = require("./happypack")

const utils = require("./utils")
const config = require("../config")

const env = process.env.NODE_ENV || "development"
const url = `http://localhost:${config[env].port}`

// webpack.base.config + dev 配置
const baseWebpackConfig = require("./webpack.base.config")
module.exports = merge(baseWebpackConfig, {
  entry: {
    app: [
      "webpack/hot/dev-server",
      `webpack-dev-server/client?${url}/`,
      utils.resolve("src/page/index.js")
    ]
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        type: "javascript/auto",
        use: ["happypack/loader?id=css"]
      }
    ]
  },
  devtool: "#source-map",
  output: {
    filename: "[name].js",
    path: config[env].assetsRoot,
    publicPath: config[env].assetsPublicPath,
    chunkFilename: "[name].js"
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      // 引入 dll 生成的 manifest 文件
      manifest: utils.resolve("dist/vendor-manifest.json")
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    new HappyPack(
      getHappyPackConfig({
        id: "css",
        loaders: utils.extractCSS()
      })
    )

    // new OpenBrowserPlugin({ url: url })
  ],
  // see https://webpack.js.org/configuration/dev-server/
  devServer: {
    hot: true,
    noInfo: false,
    quiet: false,
    host: "127.0.0.1",
    port: config[env].port,
    // open 参数无效，请使用 OpenBrowserPlugin
    open: false,
    // #https://github.com/webpack/webpack-dev-server/issues/882
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    },
    inline: true,
    // 解决开发模式下 在子路由刷新返回 404 的情景
    historyApiFallback: {
      index: config[env].assetsPublicPath
    },
    stats: {
      colors: true,
      modules: false
    },
    contentBase: config[env].contentBase,
    publicPath: config[env].assetsPublicPath
  }
})
