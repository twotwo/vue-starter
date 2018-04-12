import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Test from "@/components/Test/Index.vue";
import Test1 from "@/components/Test.vue";
import BlogHome from "@/components/BlogHome";
import BlogPost from "@/components/BlogPost";
import CustomersHome from "@/components/CustomersHome";
import CustomerPage from "@/components/CustomerPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/test",
      name: "test-home",
      component: Test
    },
    {
      path: "/test1",
      name: "test-home1",
      component: Test1
    },
    {
      path: "/blog",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    },
    {
      path: "/customers",
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
