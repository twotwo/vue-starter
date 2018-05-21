<template>
  <div>
    <app-registration></app-registration>
    <app-registrations></app-registrations>
  </div>
</template>

<script>
import Registration from './Registration.vue';
import Registrations from './Registrations.vue';
export default {
  components: {
    appRegistration: Registration,
    appRegistrations: Registrations
  }
}
</script>