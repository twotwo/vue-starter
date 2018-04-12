<template>
  <v-tabs align-with-title right color="cyan">
    <v-tabs-slider color="yellow"></v-tabs-slider>
    <div><v-btn color="info" round href="#">Home</v-btn></div>
    <div><v-btn color="info" round href="#/test">Test Vue.js</v-btn></div>
    <div><v-btn color="info" round href="#/customers">Customers</v-btn></div>
    <div><v-btn color="info" round href="#/blog">Blog Posts</v-btn></div>
  </v-tabs>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      text: "Vuetify.js tabs"
    };
  }
};
</script>

<style>
/* @import "../assets/css/bulma.min.css"; */
</style>