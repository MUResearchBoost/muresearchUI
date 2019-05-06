import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchObject: {},
    modalPublication: [],
    publicationSearchResults: [],
    recommendationResults: []
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
    getRecSeen: state => {
      return (state.recommendationResults.length !== 0)
    },
    getModalPublication: state => {
      if (state.modalPublication.length === 0) { return {} }
      return state.modalPublication[state.modalPublication.length - 1]
    },
    getPublicationSearchResults: state => {
      return state.publicationSearchResults
    },
    getReccomendationResults: state => {
      if (state.recommendationResults.length === 0) { return [] }
      console.log(state.recommendationResults[state.recommendationResults.length - 1])
      return state.recommendationResults[state.recommendationResults.length - 1]
    }
  },
  mutations: {
    setSearchObject (state, searchObj) {
      state.searchObject = searchObj
    },
    addModalPublication (state, pub) {
      state.modalPublication.push(pub)
    },
    addReccomendation (state, list) {
      state.recommendationResults.push(list)
    },
    rmReccomendation (state) {
      state.recommendationResults.pop()
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
    async addReccomendation (context, list) {
      var url = 'http://34.73.129.81:5000/recommendPublication/'
      await axios
        .post(url, list)
        .then(response => {
          context.commit('addReccomendation', response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    rmModalPublication (context) {
      context.commit('rmModalPublication')
    },
    rmReccomendation (context) {
      context.commit('rmReccomendation')
    },
    async goSearch (context, page) {
      var url = 'http://34.73.129.81:8080/api/test/search/publication/' + page + '/' + context.state.searchObject.searchtext
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
