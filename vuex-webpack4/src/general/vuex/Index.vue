<template>
  <div>
    <app-registration @userRegistered="userRegistered" :users="unregisteredUsers"></app-registration>
    <app-registrations @userUnregistered="userUnregistered" :registrations="registrations"></app-registrations>
  </div>
</template>

<script>
import Registration from './Registration.vue';
import Registrations from './Registrations.vue';
export default {
  data () {
    return {
      registrations: [],
      users: [
        { id: 1, name: '张三', registered: false },
        { id: 2, name: '李四', registered: false },
        { id: 3, name: '王五', registered: false },
        { id: 4, name: '赵六', registered: false }
      ]
    }
  },
  computed: {
    unregisteredUsers () {
      return this.users.filter((user) => {
        return !user.registered;
      });
    }
  },
  methods: {
    userRegistered (user) {
      const date = new Date();
      this.registrations.push({ userId: user.id, name: user.name, date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() })
    },
    userUnregistered (registration) {
      const user = this.users.find(user => {
        return user.id === registration.userId;
      });
      user.registered = false;
      this.registrations.splice(this.registrations.indexOf(registration), 1);
    }
  },
  components: {
    appRegistration: Registration,
    appRegistrations: Registrations
  }
}
</script>