<template>
  <div class="about">
    <h1>About Me</h1>
    <PersonalInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalInfo from "@/components/PersonalInfo.vue";

export default {
  name: "about",
  components: {
    PersonalInfo
  }
};
</script>
