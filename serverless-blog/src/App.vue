<template>
  <div id="app">
    <common-header></common-header>
    <common-nav></common-nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonNav from "@/components/CommonNav.vue";
import CommonFooter from "@/components/CommonFooter.vue";
export default {
  name: "App",
  components: {
    CommonHeader,
    CommonNav,
    CommonFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
