<template>
  <div class="about">
    <h1>About Me</h1>
    <Skills />
  </div>
</template>

<script>
// @ is an alias to /src
import Skills from "@/components/Skills.vue";

export default {
  name: "about",
  components: {
    Skills
  }
};
</script>
