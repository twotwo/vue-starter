<template>
  <div class="about">
    <h1>About Me</h1>
    <PersonalInfo />
    <h2>Resume Guide</h2>
    <SkillTable />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalInfo from "@/components/PersonalInfo.vue";

import SkillTable from "@/components/SkillTable.vue";

export default {
  name: "about",
  components: {
    PersonalInfo,
    SkillTable
  }
};
</script>
