import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  // export default new Vuex.Store({
  state: {
    registrations: [],
    users: [
      { id: 1, name: "张三", registered: false },
      { id: 2, name: "李四", registered: false },
      { id: 3, name: "王五", registered: false },
      { id: 4, name: "赵六", registered: false }
    ]
  },
  getters: {
    unregisterUsers (state) {
      return state.users.filter(user => {
        return !user.registered
      })
    },
    registrations (state) {
      return state.registrations
    },
    totalRegistrations (state) {
      return state.registrations.length
    }
  }
})
