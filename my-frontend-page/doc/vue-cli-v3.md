# 使用 @vue/cli version 3.x 创建项目

## 开发环境

```bash
➜  vue-starter git:(master) ✗ uname -v && node -v && npm -v && vue -V
Darwin Kernel Version 18.0.0
v8.11.3
6.4.1
3.0.4
```

`npm install -g @vue/cli # https://cli.vuejs.org/`

## 创建项目

```bash
➜  vue-starter git:(master) ✗ vue create my-frontend-page
Vue CLI v3.0.4
? Please pick a preset: ~/.vuerc (vue-router, vuex, stylus, babel, eslint, unit-jest)
...
🎉  Successfully created project my-frontend-page.
👉  Get started with the following commands:

 $ cd my-frontend-page
 $ npm run serve
```

## 用 Vue CLI 3 开发项目

- cli `vue create`/`vue ui`
- [cli-service](https://cli.vuejs.org/zh/guide/cli-service.html) `vue-cli-service serve`/`vue-cli-service build`/`vue-cli-service lint`