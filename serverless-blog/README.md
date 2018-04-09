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

1) Define the Page Type
2) Create a page
3) Integrate into your application

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

### 3. 

