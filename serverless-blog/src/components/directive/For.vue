<template>
  <div>
    <h3><a href="https://codingthesmartway.com/vue-js-2-quickstart-tutorial-2017/#v-for">参见</a></h3>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
         {{user.firstname}} {{user.lastname}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-for test",
  data() {
    return {
      users: [
        { firstname: "Sebastian", lastname: "Eschweiler" },
        { firstname: "Bill", lastname: "Smith" },
        { firstname: "John", lastname: "Porter" }
      ]
    };
  }
};
</script>

<style scoped>

</style>
