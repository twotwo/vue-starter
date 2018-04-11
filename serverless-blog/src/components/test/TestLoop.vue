<template>
  <div>
    <h3><a href="http://www.runoob.com/vue2/vue-loop.html">参见</a></h3>
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
export default {
  name: "test-loop",
  data() {
    return {
      sites: [{ name: "Runoob" }, { name: "Google" }, { name: "Taobao" }]
    };
  }
};
</script>

<style scoped>

</style>
