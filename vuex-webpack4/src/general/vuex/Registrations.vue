<template>
  <div id="registrations">
    <div class="summary">
      <h3>注册单</h3>
      <h5>注册人数 {{ total }}</h5>
    </div>
    <hr>
    <div class="row" v-for="registration in registrations" :key="registration.id">
      <h4>{{ registration.name }}</h4>
      <span @click="unregister(registration)">(注销)</span>
      <div class="date">{{ registration.date }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  // props: ["registrations"],
  methods: {
    unregister (registration) {
      this.$store.commit({
        type: 'unregister',
        userId: registration.userId
      })
    }
  },

  computed: mapGetters({
    registrations: 'registrations',
    total: 'totalRegistrations'
  })
};
</script>

<style scoped>
#registrations {
  box-shadow: 1px 1px 2px 1px #ccc;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  width: 300px;
  vertical-align: top;
  text-align: left;
}

.summary {
  text-align: center;
}

.row h4 {
  display: inline-block;
  width: 30%;
  margin: 0 0 10px 0;
  box-sizing: border-box;
}

.row span {
  width: 30%;
  color: red;
  cursor: pointer;
}

.row span:hover {
  color: darkred;
}

.date {
  display: inline-block;
  width: 38%;
  text-align: right;
  box-sizing: border-box;
}
</style>