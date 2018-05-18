# Vuex 基础

## 0. vuex intro

[What is Vuex?](https://vuex.vuejs.org/zh-cn/intro.html)

### 0.1 State Management Pattern

![集中式存储管理所有组件的状态](https://vuex.vuejs.org/en/images/vuex.png)

### 0.2 When Should I Use It

当应用非常非常简单，例如应用中只有一个业务对象(row data object)时，可以使用[简单状态管理](https://cn.vuejs.org/v2/guide/state-management.html#简单状态管理起步使用)

![Simple State Management](https://vuejs.org/images/state.png)

## 1. setup

```bash
$ vue init dwqs/vue-startup vuex-webpack4

？Project Name
```

![初始参数](./static/img/01-setup.png)

### 1.1 Vue.js webpack 4 模板

<https://github.com/dwqs/vue-startup>

### 1.2 eslint fix

`npx eslint src/**/*.js src/**/*.vue --fix`

## 2 sample code(without vuex)

<https://github.com/mschwarzmueller/vuejs2-vuex-basics>

### 2.1 add

* src/general/vuex/Registration.vue
* src/general/vuex/Registrations.vue
* src/general/vuex/Index.vue

### 2.2 modify

引入内容，更新路由

* src/page/index.js `const App = () => import(/* webpackChunkName: "main" */ "../general/vuex/Index")`
