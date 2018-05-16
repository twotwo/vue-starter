const webpackDevConfig = require('./webpack.dev.config.js');
const webpack = require('webpack');
// Compiler Instance
const compiler = webpack(webpackDevConfig);
const WebpackDevServer = require('webpack-dev-server');
// Dev Server Instance
const server = new WebpackDevServer(compiler, webpackDevConfig.devServer);

// console log text color
const chalk = require('chalk');
const PluginError = require('plugin-error');
// Dev Server Port
const port = require('../config/index').development.port;
server.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(chalk.white('Dev Server 启动失败: \n'));
        throw new PluginError('[webpack-dev-server err]', err);
    }
});

// 编译完成
compiler.plugin('done', (stats) => {
    console.log(chalk.green(`Webpack 编译成功, open browser to visit http://localhost:${port}/\n`));
});

// 编译失败
compiler.plugin('failed', (err) => {
    console.log(chalk.white('Webpack 编译失败: \n'));
    throw new PluginError('[webpack build err]', err);
});

// 监听文件修改
compiler.plugin('compilation', compilation => { });
