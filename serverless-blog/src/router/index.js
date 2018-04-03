import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import BlogHome from "@/components/BlogHome";
import BlogPost from "@/components/BlogPost";
import CustomersHome from "@/components/CustomersHome";
import CustomerPage from "@/components/CustomerPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/blog/",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    },
    {
      path: "/customers/",
      name: "customers-home",
      component: CustomersHome
    },
    {
      path: "/customers/:slug",
      name: "customer-page",
      component: CustomerPage
    }
  ]
});
