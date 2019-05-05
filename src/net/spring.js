/* eslint-disable no-unused-vars */
import axios from 'axios'
import { springBaseUrl } from './config'

/* About Search */
export function searchBySearchState (searchState, page = 0) {
  return axios.post(`${springBaseUrl()}search/${page}`, searchState)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function searchByRawText (rawText, page = 0) {
  return axios.get(`${springBaseUrl()}search/${page}/${rawText}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function searchPeopleBySearchState (searchState, page = 0) {
  return axios.post(`${springBaseUrl()}search/people/${page}`, searchState)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function searchPeopleByRawText (rawText, page = 0) {
  return axios.get(`${springBaseUrl()}search/people/${page}/${rawText}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function searchPublicationBySearchState (searchState, page = 0) {
  return axios.post(`${springBaseUrl()}search/publication/${page}`, searchState)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function searchPublicationByRawText (rawText, page = 0) {
  return axios.get(`${springBaseUrl()}search/publication/${page}/${rawText}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

/* About User */

export function createUser (user) {
  return axios.post(`${springBaseUrl()}user`, user)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function getUserById (id) {
  return axios.get(`${springBaseUrl()}user/${id}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

/* About Related */

export function getRelatedPeople (people, page = 0) {
  return axios.post(`${springBaseUrl()}related/people/${page}`, people)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function getRelatedPublication (publication, page = 0) {
  return axios.post(`${springBaseUrl()}related/publication/${page}`, publication)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

/* About Publication */

export function getRandomPublication () {
  // return axios.get(`${springBaseUrl()}publication`)
  return {}
}

export function getPublicationById (id) {
  return axios.get(`${springBaseUrl()}publication/${id}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

/* About People */

export function getRandomPeople () {
  // return axios.get(`${springBaseUrl()}people`)
  return {}
}

export function getPeopleById (id) {
  return axios.get(`${springBaseUrl()}people/${id}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function getPeopleByName (name) {
  return axios.get(`${springBaseUrl()}people/name/${name}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

/* About Auth */

export function login (user) {
  return axios.post(`${springBaseUrl()}auth/`, user)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function guest () {
  return axios.get(`${springBaseUrl()}auth/guest`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

/* About Auto-Complete */

export function getAutoComplete (query) {
  return axios.get(`${springBaseUrl()}autocomplete/${query}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function getAutoCompletePeople (query) {
  return axios.get(`${springBaseUrl()}autocomplete/people/${query}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function getAutoCompletePublication (query) {
  return axios.get(`${springBaseUrl()}autocomplete/publication/${query}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function getPublicationsByPeopleName (name) {
  return axios.get(`${springBaseUrl()}peoplenametopublication/name/${name}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}
