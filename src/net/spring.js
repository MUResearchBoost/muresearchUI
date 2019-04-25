/* eslint-disable no-unused-vars */
import axios from 'axios'
import { springBaseUrl } from './config'

/* About Search */
export function searchBySearchState (searchState, page = 0) {
  return axios.post(`${springBaseUrl()}search/${page}`, searchState)
}

export function searchByRawText (rawText, page = 0) {
  return axios.get(`${springBaseUrl()}search/${page}/${rawText}`)
}

export function searchPeopleBySearchState (searchState, page = 0) {
  return axios.post(`${springBaseUrl()}search/people/${page}`, searchState)
}

export function searchPeopleByRawText (rawText, page = 0) {
  return axios.get(`${springBaseUrl()}search/people/${page}/${rawText}`)
}

export function searchPublicationBySearchState (searchState, page = 0) {
  return axios.post(`${springBaseUrl()}search/publication/${page}`, searchState)
}

export function searchPublicationByRawText (rawText, page = 0) {
  return axios.get(`${springBaseUrl()}search/publication/${page}/${rawText}`)
}

/* About User */

export function createUser (user) {
  return axios.post(`${springBaseUrl()}user`, user)
}

export function getUserById (id) {
  return axios.get(`${springBaseUrl()}user/${id}`)
}

/* About Related */

export function getRelatedPeople (people, page = 0) {
  return axios.post(`${springBaseUrl()}related/people/${page}`, people)
}

export function getRelatedPublication (publication, page = 0) {
  return axios.post(`${springBaseUrl()}related/publication/${page}`, publication)
}

/* About Publication */

export function getRandomPublication () {
  // return axios.get(`${springBaseUrl()}publication`)
  return {}
}

export function getPublicationById (id) {
  return axios.get(`${springBaseUrl()}publication/${id}`)
}

/* About People */

export function getRandomPeople () {
  // return axios.get(`${springBaseUrl()}people`)
  return {}
}

export function getPeopleById (id) {
  return axios.get(`${springBaseUrl()}people/${id}`)
}

/* About Auth */

export function login (user) {
  return axios.post(`${springBaseUrl()}auth/`, user)
}

export function guest () {
  return axios.get(`${springBaseUrl()}auth/guest`)
}

/* About Auto-Complete */

export function getAutoComplete (query) {
  return axios.get(`${springBaseUrl()}autocomplete/${query}`)
}

export function getAutoCompletePeople (query) {
  return axios.get(`${springBaseUrl()}autocomplete/people/${query}`)
}

export function getAutoCompletePublication (query) {
  return axios.get(`${springBaseUrl()}autocomplete/publication/${query}`)
}
