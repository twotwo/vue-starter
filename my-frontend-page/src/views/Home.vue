<template>
  <div class="home">
    <div class="main">
      <h2>Programmer, Architect, Manager</h2>
      <h3>Summary</h3>
      <ul>
        <li>Skilled in teamwork, leadership, creative thinking.</li>
        <li>Adept at data structures, problem solving, end-to-end coding.</li>
        <li>Passion for Coding.</li>
      </ul>
      <Experence />
      <h3>Education</h3>
      <p>XX大学</p>
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
import Experence from "@/components/Experence.vue";

export default {
  name: "home",
  components: {
    Skills,
    PersonalInfo,
    Experence
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.main {
  width: 75%;
  float: left;
}

.right {
  width: 25%;
  float: left;
}

ul {
  display: inline-block;
  text-align: left;
}
</style>
