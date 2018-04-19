<template>
  <v-app>
    <!-- my-header begin -->
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon 
        @click="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>accessibility</v-icon>
          View Meetups
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- my-header end -->
    <!-- left navi-bar begin -->
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>accessibility</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- left navi-bar end -->
    <main></main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  }
}
</script>
