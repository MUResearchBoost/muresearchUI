import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchObject: {},
    modalseen: false,
    modalPublication: {}
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
    },
    getModalSeen: state => {
      return state.modalseen
    },
    getModalPublication: state => {
      return state.modalPublication
    }
  },
  mutations: {
    setSearchObject (state, searchObj) {
      state.searchObject = searchObj
    },
    showModal (state) {
      state.modalseen = true
    },
    closeModal (state) {
      state.modalseen = false
    },
    setModalPublication (state, pub) {
      state.modalPublication = pub
    }
  },
  actions: {
    setSearchObject (context, searchObj) {
      context.commit('setSearchObject', searchObj)
    },
    setModalShow (context, showstate) {
      if (showstate) {
        context.commit('showModal')
      } else {
        context.commit('closeModal')
        context.commit('setModalPublication', {})
      }
    },
    setModalPublication (context, pub) {
      context.commit('setModalPublication', pub)
    }
  }
})
