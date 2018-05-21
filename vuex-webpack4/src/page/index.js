// Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
import "normalize.css"
import "babel-polyfill"

import Vue from "vue"
import VueRouter from "vue-router"
import { sync } from "vuex-router-sync"
// import store from "../vuex/index"
import { store } from "../general/vuex/store"

require("es6-promise").polyfill()

const env = process.env.NODE_ENV || "development"

if (env !== "development") {
  Vue.config.devtools = false
  Vue.config.productionTip = false
}

Vue.use(VueRouter)

// dynamic import for on-demand loaded chunk
const Info = () =>
  import(/* webpackChunkName: "info" */ "../general/info/index")
const Test = () =>
  import(/* webpackChunkName: "test" */ "../general/test/index")
// const App = () => import(/* webpackChunkName: "main" */ "../general/app/index")
const App = () => import(/* webpackChunkName: "main" */ "../general/vuex/Index")

const Outer = { template: "<router-view></router-view>" }

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Outer,
      children: [
        // 嵌套路由 https://github.com/vuejs/vue-router/blob/next-doc/docs/en/advanced-routing/nested.md
        { path: "", component: App },
        { path: "info", component: Info },
        { path: "test", component: Test }
      ]
    }
  ]
})

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Outer
})

app.$mount("#app")
