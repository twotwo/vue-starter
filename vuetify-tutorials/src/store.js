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
        date: new Date(),
        location: '北京',
        description: '聚会在北京聚会在北京!'
      },
      {
        imageUrl: "https://i.travelapi.com/hotels/1000000/500000/490600/490509/490509_186_z.jpg",
        id: "wefewfsfdsfdf",
        title: "聚会在上海",
        date: new Date(),
        location: '上海',
        description: '聚会在上海聚会在上海!'
      }
    ],
    user: {
      id: '23r4few',
      email: 'test@test.com',
      password: '111111',
      registeredMeetups: []
    }
  },
  mutations: {
    /**
     * save meetup to cache
     * @param {*} state 
     * @param {*} payload 
     */
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    },
    /**
     * save user to cache
     * @param {*} state 
     * @param {*} payload 
     */
    setUser(state, payload) {
      state.user = payload
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
    },
    signUserUp({ commit }, payload) {
      // call server create user method
      // . then ( user ==> user.id...
      const newUser = {
        id: '23r4few',
        email: payload.email,
        password: payload.password,
        registeredMeetups: []
      }
      commit('setUser', newUser)
    },
    signUserIn({ commit }, payload) {
      // call server signIn method
      // . then ( user ==> user.id...
      const newUser = {
        id: '23r4few',
        email: payload.email,
        password: payload.password,
        registeredMeetups: []
      }
      commit('setUser', newUser)
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
    },
    user(state) {
      return state.user
    }
  }
})
