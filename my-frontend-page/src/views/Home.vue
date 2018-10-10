<template>
  <div class="home">
    <div class="main">
      <h2>Programmer, Architect, Manager</h2>
      <h3>Summary</h3>
      <h3>Experence</h3>
      <h3>Education</h3>
    </div>
    <div class="right">
      <PersonalInfo />
      <Skills />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Skills from "@/components/Skills.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";

export default {
  name: "home",
  components: {
    Skills,
    PersonalInfo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.main {
  width: 70%;
  float: left;
}

.right {
  width: 30%;
  float: left;
}
</style>
