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
 </div>
</template>

<script>
import TestLoop from "./TestLoop.vue";
export default {
  name: "List",
  components: {
    TestLoop
  },
  data() {
    return {
      sites: [{ name: "Runoob" }, { name: "Google" }, { name: "Taobao" }],
      message: 'Hello, Vue.js!'
    };
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function() {
      // // 方法内 `this` 指向 vm
      alert(this.message);
    },
    say: function(msg) {
      alert(msg);
    }
  }
};
</script>
<style scoped>

</style>
