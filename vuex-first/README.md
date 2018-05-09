# Learn Vuex In 10 Minutes
YouTube 视频[地址](https://www.youtube.com/watch?v=LW9yIR4GoVU)

## 1. html 基本结构

* head 引入 vue 和 vuex
* body 中 `<div id="app">` 对应 vue 的 template
* script 是 vue 实例

## 2. 引入 vuex

```javascript
  const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
  });
```