# vuetify-tutorials

> Vue.js + Vuetify + MySQL 项目开发教程

[教程](./vuetify-tutorials.md)

## Setup Project(vuetify@1.2.1/vue@2.5.17)

``` bash
➜  vuetify-cookbook git:(05-vuex) ✗ vue -V
3.0.1
➜  vuetify-cookbook git:(05-vuex) ✗ vue init webpack .
➜  vuetify-cookbook git:(05-vuex) ✗ vue add vuetify
...
? Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
? Use custom theme? Yes
? Use a-la-carte components? No
? Use babel/polyfill? Yes
...

```

### 版本匹配

`vue` 和 `vue-template-compiler` 必须是相同版本

### Vuex state on page refresh

- [Vuex state on page refresh](https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh)
- [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)
- [js-cookie](https://github.com/js-cookie/js-cookie)

```bash
npm i vuex-persistedstate js-cookie
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Git Action

### Checkout Branch

### Push Branch