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

## 3. 访问 state 中的对象

```javascript
    state: {
      message: 'Hello From Vuex',
      count: 0
    },
```

```javascript
    computed: {
      message() {
        return store.state.message;
      }
    }
```

```html
    <h2>{{ message }}</h2>
```