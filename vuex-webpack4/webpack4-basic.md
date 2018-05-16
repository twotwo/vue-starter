# Webpack 4 基础

## 项目模板

<https://github.com/dwqs/vue-startup>

## 默认配置

在 Webpack 4 中，不再强制要求指定 entry 和 output 路径。

webpack 4 会默认 entry 为 ./src，output 为 ./dist

## `npm run dev` 启动顺序

### 1. scripts.dev@package.json

```json
"dev": "npx cross-env NODE_ENV=development node ./build/dev-server.js",
```

### 2. build/dev-server.js

1. 读取开发配置信息: build/webpack.dev.config.js
2. 读取开发服务端口: config/index.js
3. 启动开发服务

### 3. build/webpack.dev.config.js

```bash
src/index.html
src/page/index.js
```