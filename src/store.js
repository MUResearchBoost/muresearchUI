import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchObject: {},
    modalPublication: [],
    publicationSearchResults: []
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
      return (state.modalPublication.length !== 0)
    },
    getModalPublication: state => {
      if (state.modalPublication.length === 0) { return {} }
      return state.modalPublication[state.modalPublication.length - 1]
    },
    getPublicationSearchResults: state => {
      return state.publicationSearchResults
    }
  },
  mutations: {
    setSearchObject (state, searchObj) {
      state.searchObject = searchObj
    },
    addModalPublication (state, pub) {
      state.modalPublication.push(pub)
    },
    rmModalPublication (state) {
      state.modalPublication.pop()
    },
    setSearchResult (state, results) {
      state.publicationSearchResults = results
    }
  },
  actions: {
    setSearchObject (context, searchObj) {
      context.commit('setSearchObject', searchObj)
    },
    addModalPublication (context, pub) {
      context.commit('addModalPublication', pub)
    },
    rmModalPublication (context) {
      context.commit('rmModalPublication')
    },
    async goSearch (context, page) {
      var url = 'http://35.236.122.104:8080/api/test/search/publication/' + page + '/' + context.state.searchObject.searchtext
      await axios
        .get(url)
        .then(response => {
          context.commit('setSearchResult', response.data.data)
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
