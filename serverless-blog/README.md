# serverless-blog

> A Vue.js project

## Initialize

### 注册 [buttercms](https://buttercms.com/home/) 账号

* Define Page Type
* Create Page
* Integrate your app

### 创建 `serverless-blog` 项目

```bash
➜  vue-starter git:(master) ✗ vue -V
2.9.3
➜  vue-starter git:(master) ✗ vue init webpack serverless-blog -y
➜  vue-starter git:(master) ✗ cd serverless-blog
➜  serverless-blog git:(master) ✗ npm install buttercms --save
```

## Build Setup

```bash
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

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Cookbook

* [Build a CMS-powered blog with Vue.js](https://buttercms.com/docs/api-client/vuejs#Blogging)
* [API Reference](https://buttercms.com/docs/api/)
* [Tutorial](https://github.com/ButterCMS/buttercms-vue-tutorial)
* [blog-template](https://github.com/ButterCMS/blog-template)

### 1. Display posts

To display posts we create a simple /blog route (using vue-router) in our app and fetch blog posts from the Butter API, as well as a /blog/:slug route to handle individual posts.

* create `src/buttercms.js`

```js
import Butter from "buttercms";
export const butter = Butter("your_api_token");
```

* update `router/index.js`

```diff
@@ -1,6 +1,8 @@
 import Vue from "vue";
 import Router from "vue-router";
 import HelloWorld from "@/components/HelloWorld";
+import BlogHome from "@/components/BlogHome";
+import BlogPost from "@/components/BlogPost";

 Vue.use(Router);

@@ -11,6 +13,16 @@ export default new Router({
       path: "/",
       name: "HelloWorld",
       component: HelloWorld
+    },
+    {
+      path: "/blog/",
+      name: "blog-home",
+      component: BlogHome
+    },
+    {
+      path: "/blog/:slug",
+      name: "blog-post",
+      component: BlogPost
     }
   ]
 });
```

* create `src/components/BlogHome.vue` lists most recent posts
* create `src/components/BlogPost.vue` list a single post

访问： `http://localhost:8080/blog/`

### 2. Display customers

[Creating pages](https://buttercms.com/docs/api-client/vuejs#CreatingPages)

1.  Define the Page Type
2.  Create a page
3.  Integrate into your application

[ButterCMS API reference](https://buttercms.com/docs/api/?shell#pages)

#### 2.1 Update the routes in app

`router/index.js`

```diff
$ git diff src/router/index.js
@@ -3,6 +3,8 @@ import Router from "vue-router";
 import HelloWorld from "@/components/HelloWorld";
 import BlogHome from "@/components/BlogHome";
 import BlogPost from "@/components/BlogPost";
+import CustomersHome from "@/components/CustomersHome";
+import CustomerPage from "@/components/CustomerPage";

 Vue.use(Router);

@@ -23,6 +25,16 @@ export default new Router({
       path: "/blog/:slug",
       name: "blog-post",
       component: BlogPost
+    },
+    {
+      path: "/customers/",
+      name: "customers-home",
+      component: CustomersHome
+    },
+    {
+      path: "/customers/:slug",
+      name: "customer-page",
+      component: CustomerPage
     }
   ]
 });
```

#### 2.2 Add Pages

* `src/components/CustomersHome.vue` List customers
* `src/components/CustomerPage` View a customer

访问： `http://localhost:8080/customers/`

### 3. Unit Testing

* [Unit Testing](https://vuejs.org/v2/cookbook/unit-testing-vue-components.html)
* [Guides](https://vue-test-utils.vuejs.org/en/guides/)

#### 3.1 `src/components/CustomersHome.vue`

`test/unit/specs/HelloWorld.spec.js`

## Vue 框架学习

### 动态组件

在交互中经常会遇见需要在两个或多个 UI 元素之前进行交替切换，Vue 中保留了一个 `<component>` 元素，通过动态绑定到其 `is` 属性上，可以很方便的实现让多个组件挂载到同一个挂载点上，而且每次只有一个组件时显示在界面上的。在 Vue 的概念中被称作是动态组件。

### 4. Apply CSS Framework(use Metro 4) //don't work

* [Getting started](https://metroui.org.ua/vuejs.html)

* [Metro 4](https://www.npmjs.com/package/metro4)
* [JQuery](https://www.npmjs.com/package/jquery) // Metro 4 requires jQuery!

```bash
➜  serverless-blog git:(master) ✗ cnpm i metro4 --save #cnpm会安装JQuery
```

* add meta tag to `index.html`
* add mounted to `src/App.vue`
* add `"main": "./js/metro.js",` to `node_modules/metro4/package.json`

### 5. Apply CSS Framework(use Vuetify)

* [Getting started](https://vuetifyjs.com/zh-Hans/getting-started/quick-start)

```bash
➜  serverless-blog git:(master) ✗ npm i vuetify --save
```

* import `Vuetify` to `src/main.js`
* import CSS to `src/main.js`

[npm search ](https://www.npmjs.com/search) for `keywords:css framework`

#### 5.1 tabs - navi bar

components/[tabs](https://vuetifyjs.com/zh-Hans/components/tabs)
