<template>
  <div id="test-home" class="section">
    <div class="container">
      <h1 class="is-size-1">{{ page_title }}</h1>
      <hr>
    </div>
    <div>
      <span>请选择展示的测试组件： <strong>{{ selected.name }}</strong></span>
      <select v-model="selected">
        <option v-for="item in items" v-bind:value="item" :key="item.name">
          {{ item }}
        </option>
      </select>
    </div>

		<div><component :is="selected"></component></div>
  </div>
</template>

<script>
import TestLoop from "@/components/Test/TestLoop.vue";
import Quickstart from "@/components/Test/Quickstart.vue";
import Components from "@/components/Test/Components.vue";
import Selects from "@/components/vuetify/Selects.vue";
let children = {
  TestLoop,
  Quickstart,
  Components,
  Selects
};
export default {
  name: "List",
  components: children,
  data() {
    return {
      page_title: "Test with Vue.js",
      sites: [{ name: "Runoob" }, { name: "Google" }, { name: "Taobao" }],
      message: "Hello, Vue.js!",
      items: Object.keys(children),
      selected: Components
    };
  },
  // computed: {
  //   currentView() {
  //     return this.children[this.index];
  //   }
  // },
  // 在 `methods` 对象中定义方法
  methods: {
    greet() {
      // 方法内 `this` 指向 vm
      alert(this.message);
    }
  }
};
</script>

<style scoped>

</style>
