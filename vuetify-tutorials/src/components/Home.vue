<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item 
            v-for="meetup in meetups" 
            :src="meetup.imageUrl" 
            :key="meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>欢迎参加我们的聚会！</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line
  data() {
    return {
      meetups: [
        {
          imageUrl: "http://ryugaku.myedu.jp/images/chn/sc/pekin.jpg",
          id: "dsfsadfdfwfew",
          title: "聚会在北京"
        },
        {
          imageUrl:
            "https://i.travelapi.com/hotels/1000000/500000/490600/490509/490509_186_z.jpg",
          id: "wefewfsfdsfdf",
          title: "聚会在上海"
        }
      ]
    };
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>
