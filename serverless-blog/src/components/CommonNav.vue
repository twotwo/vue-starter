<template>
  <div>
    <nav class="navbar is-info">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/test">
            Test Vue.js
          </router-link>
          <router-link class="navbar-item" to="/customers">
            Customers
          </router-link>
          <router-link class="navbar-item" to="/blog">
            Blog Posts
          </router-link>
          <router-link class="navbar-item" to="/rss">
            Others
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
@import "../assets/css/bulma.min.css";
</style>