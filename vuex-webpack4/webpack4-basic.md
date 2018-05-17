# Webpack 4 基础

## 项目模板

<https://github.com/dwqs/vue-startup>

## `npm run dev` 启动顺序

### 1. scripts.dev@package.json

```json
"dev": "npx cross-env NODE_ENV=development node ./build/dev-server.js",
```

`node ./build/dev-server.js` 直接启动避免 Ctr+c 抛异常

### 2. build/dev-server.js

1.读取开发配置信息: build/webpack.dev.config.js

2.读取开发服务端口: config/index.js

3.启动开发服务

### 3. build/webpack.dev.config.js

1.合并 `build/webpack.base.config.js` 中的配置

1.[entry](https://webpack.js.org/concepts/entry-points/) `src/page/index.js`

1.[output](https://webpack.js.org/concepts/output/) `config.assetsRoot` == `./dist`

1.[plugins](https://webpack.js.org/concepts/plugins/) `base.config.plugins.HtmlWebpackPlugin` == `src/index.html`

1.[module](https://webpack.js.org/concepts/modules/)

```javascript
```
