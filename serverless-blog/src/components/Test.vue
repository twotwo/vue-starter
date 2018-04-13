<template>
  <div id="test-home" class="section">
    <div class="container">
      <h1 class="is-size-1">{{ page_title }}</h1>
      <hr>
    </div>
    <div>
      <span>请选择展示的测试 <strong>{{ selected.name }}</strong></span>
      <select v-model="selected">
        <option v-for="item in items" v-bind:value="item" :key="item.name">
          {{ item }}
        </option>
      </select>
    </div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs6>
          <v-subheader>请选择展示的测试组件： <strong>{{ selected.name }}</strong></v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-select
            :items="items"
            v-model="selected"
            label="Select"
            single-line
            item-text="name"
            return-object
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
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
