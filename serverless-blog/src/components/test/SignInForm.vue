<template>
  <div>
    <div class="form-item">
      <label for="">UserName</label>
      <input type="text" name="username"/>
    </div>
    <div class="form-item">
      <label for="">Password</label>
      <input type="password" name="password"/>
    </div>
    <div class="form-item">
      <label for=""></label>
      <button class="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign-in-form",
  created: function() {
    console.log(this.name, "I am created");
  },
  destroyed: function() {
    console.log(this.name, "I am destroyed");
  }
};
</script>

<style scoped>

</style>
