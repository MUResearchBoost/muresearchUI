import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchObject: {}
  },
  getters: {
    searchObj: state => {
      return state.searchObject
    },
    hasVal: state => {
      if (Object.keys(state.searchObject).length === 0) {
        return false
      } else {
        return true
      }
    }
  },
  mutations: {
    setSearchObject (state, searchObj) {
      state.searchObject = searchObj
    }
  },
  actions: {
    setSearchObject (context, searchObj) {
      context.commit('setSearchObject', searchObj)
    }
  }
})
