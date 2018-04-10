import Vue from "vue";
import CustomersHome from "@/components/CustomersHome";

describe("CustomersHome.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(CustomersHome);
    const vm = new Constructor().$mount();
    // expect(vm.$el.querySelector(".hello h1").textContent)
    // .toEqual("Welcome to Your Vue.js App");
    console.log('testing CustomersHome.vue...');
    vm.getPages();
    console.log('pages =', vm.pages);
  });
});
