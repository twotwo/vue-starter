<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  height="130px"
                  src="http://ryugaku.myedu.jp/images/chn/sc/pekin.jpg"
                  ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">我的聚会</h5>
                    <div>2018年8月8日</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat to="/meetups/1">
                    <v-icon left light>arrow_forword</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
