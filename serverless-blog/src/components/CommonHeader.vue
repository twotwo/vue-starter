<template>
  <div style="display: flex; justify-content: flex-end">
    <div class="text-xs-center">
      <v-chip outline color="green" text-color="white">
        <router-link to="/login">Login</router-link>
      </v-chip>

      <v-chip outline color="green" text-color="white">
        <router-link to="/info">User Info</router-link>
      </v-chip>
    </div>
  </div>

</template>

<script>
export default {
  name: "CommonHeader"
};
</script>

<style scoped>

</style>
