<template>
 <div>
   <div>
     <p><input type="text" v-model="message"></p>
			<p>
				<!--click事件直接绑定一个方法-->
				<button v-on:click="greet">Greet</button>
			</p>
			<p>
				<!--click事件使用内联语句-->
				<button v-on:click="say('Hi')">Hi</button>
			</p>
    </div>
    <div>
      <ol>
        <li v-for="site in sites" :key="site.id">
          {{ site.name }}
        </li>
      </ol>
    </div>
    <div id="example">
      <button @click="change">切换页面</button>
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import TestLoop from "@/components/Test/TestLoop.vue";
import Quickstart from "@/components/Test/Quickstart.vue";
import Components from "@/components/Test/Components.vue";
let children = [TestLoop, Quickstart, Components];
export default {
  name: "List",
  components: children,
  data() {
    return {
      sites: [{ name: "Runoob" }, { name: "Google" }, { name: "Taobao" }],
      message: "Hello, Vue.js!",
      index: 0,
      children: children
    };
  },
  computed: {
    currentView() {
      return this.children[this.index];
    }
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet() {
      // // 方法内 `this` 指向 vm
      alert(this.message);
    },
    say(msg) {
      alert(msg);
    },
    change() {
      this.index = ++this.index % this.children.length;
    }
  }
};
</script>
<style scoped>

</style>
