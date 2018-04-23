/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: "http://ryugaku.myedu.jp/images/chn/sc/pekin.jpg",
        id: "dsfsadfdfwfew",
        title: "聚会在北京",
        date: '2018-04-01',
        location: '北京',
        description: '聚会在北京聚会在北京!'
      },
      {
        imageUrl: "https://i.travelapi.com/hotels/1000000/500000/490600/490509/490509_186_z.jpg",
        id: "wefewfsfdsfdf",
        title: "聚会在上海",
        date: '2018-04-02',
        location: '上海',
        description: '聚会在上海聚会在上海!'
      }
    ],
    user: {
      id: '23r4few',
      registeredMeetups: ['dsfsdf']
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '2frwefasdfe3'
      }
      // 使用 sequelize 来持久化数据
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
