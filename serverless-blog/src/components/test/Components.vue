<template>
  <div>
<h2>参考</h2>
    <ul>
      <li>
        <a
          href="https://cn.vuejs.org/v2/guide/components.html"
          target="_blank"
        >
          Vue.js 官方教程 v2.x - 组件
        </a>
      </li>
      <li>
        <a
          href="http://monjer.me/2017/07/25/Vue.js笔记-动态组件.html"
          target="_blank"
        >
          Vue.js笔记-动态组件
        </a>
      </li>
      <li>
        <a
          href="https://www.cnblogs.com/xiaohuochai/p/7395694.html"
          target="_blank"
        >
          Vue动态组件
        </a>
      </li>
    </ul>

    <!-- -->
    <p class="form-toggler">
      <span ref="signInBtn" v-on:click="showForm(true)" class="active">Sign in</span>
      <span ref="signupBtn" v-on:click="showForm(false)">Sign up</span>
    </p>
    <component v-bind:is="curComponent"></component>

  </div>
</template>

<script>
import SignInForm from "@/components/Test/SignInForm.vue";
import SignUpForm from "@/components/Test/SignUpForm.vue";
export default {
  name: "components",
  components: {
    signInForm: SignInForm,
    signUpForm: SignUpForm
  },
  data: function() {
    return {
      curComponent: "signInForm"
    };
  },
  methods: {
    showForm: function(signIn) {
      if (signIn) {
        this.curComponent = "signInForm";
        this.$refs.signInBtn.className = "active";
        this.$refs.signupBtn.className = "";
      } else {
        this.curComponent = "signUpForm";
        this.$refs.signInBtn.className = "";
        this.$refs.signupBtn.className = "active";
      }
    }
  }
};
</script>

<style scoped>
.form-item {
  margin-bottom: 10px;
}
.form-item label {
  width: 100px;
  display: inline-block;
}
.form-item input {
  padding: 6px 10px;
}
.form-toggler span {
  padding: 0 15px;
  cursor: pointer;
  color: #888;
}
.form-toggler span.active {
  color: black;
}
</style>