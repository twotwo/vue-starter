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
    },
    // user: null,
    loading: false,
    error: null
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
    createMeetup({ commit, getters }, payload) {
      const meetup = {
        id: 'dsfasdfew324123',
        title: payload.title,
        location: payload.location,
        // imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        creatorId: getters.user.id
      }
      // 使用 sequelize 来持久化数据
      // 1. 获得meetup.id
      // 2. 上传图片
      const filename = payload.image.name
      const ext = filename.slice(filename.lastIndexOf('.')) //.xxx
      // store as $base/meetups/meetup.id$ext; return download url
      // update sequelize imageUrl
      commit('createMeetup', {
        ...meetup,
        imageUrl: payload.imageUrl // replaced by server side url
      })
    },
    signUserUp({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
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
      commit('setLoading', true)
      commit('clearError')
      // call server signIn method
      // . then ( user ==> user.id...
      const newUser = {
        id: '23r4few',
        email: payload.email,
        password: payload.password,
        registeredMeetups: []
      }
      commit('setUser', newUser)
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid, registeredMeetups: [] })
    },
    fetchUserData({ commit }, getter) {
      commit('setLoading', true)
      //TODO get user info from DB
      commit('setLoading', false)
    },
    logout({ commit }) {
      // signout from server
      commit('setUser', null)
    },
    clearError({ commit }) {
      commit('clearError')
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
