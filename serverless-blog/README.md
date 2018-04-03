# serverless-blog

> A Vue.js project

## Initialize

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

### Reference

* [buttercms api doc](https://buttercms.com/docs/api-client/vuejs)
* [sample code](https://github.com/ButterCMS/buttercms-vue-tutorial)

### Display posts

* create `src/buttercms.js`
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

###

### Update the routes in app

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

#### Add Pages

* `src/components/CustomersHome.vue`
* `src/components/CustomerPage`

###
