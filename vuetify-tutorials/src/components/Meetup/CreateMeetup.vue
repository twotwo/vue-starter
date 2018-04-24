<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h2 class="secondary--text">登记一个活动</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image Url"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="200">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Add Date & Time Picker -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h4>选择活动时间</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3 class="mb-2">
              <v-date-picker v-model="date"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
            </v-flex>
          </v-layout>
          <!-- Add Date & Time Picker Over -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn 
                class="primary"
                :disabled="!formIsValid"
                type="submit">添加活动</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: "",
      location: "",
      description: "",
      imageUrl: "",
      date: null,
      time: new Date()
    };
  },
  computed: {
    formIsValid () {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submitTableDateTime () {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        const hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours);
        date.setMinutes(this.time.getMinutes);
      }
      return date;
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submitTableDateTime
      };
      // store meetup
      this.$store.dispatch("createMeetup", meetupData);
      // locate to /meetups
      this.$router.push("/meetups");
    }
  }
};
</script>