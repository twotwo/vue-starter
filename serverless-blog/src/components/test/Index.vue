<template>
  <div id="test-home" class="section">
    <div class="container">
      <h1 class="is-size-1">{{ page_title }}</h1>
      <hr>
      <span>请选择展示的测试 {{ selected.name }}</span>
      <select v-model="selected">
        <option v-for="option in components" v-bind:value="option" :key="option.name">
          {{ option}}
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
let children = {
  TestLoop,
  Quickstart,
  Components
};
export default {
  name: "List",
  components: children,
  data() {
    return {
      page_title: "Test with Vue.js",
      sites: [{ name: "Runoob" }, { name: "Google" }, { name: "Taobao" }],
      message: "Hello, Vue.js!",
      index: 0,
      components: Object.keys(children),
      selected: TestLoop
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
.test-home {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
</style>
