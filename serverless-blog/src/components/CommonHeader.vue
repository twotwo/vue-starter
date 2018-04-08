<template>
  <div>    
    <ul class="head-style">
      <li>Hello, nickname!</li>
      <li><router-link class="navbar-item" to="/login">Login</router-link></li>
      <li><router-link class="navbar-item" to="/info">User Info</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommonHeader"
};
</script>

<style scoped>
.head-style {
  text-align: right;
}
.head-style li {
  display: inline-block;
}
</style>
