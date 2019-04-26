/* eslint-disable no-unused-vars */
import axios from 'axios'
import { algoBaseUrl } from './config'

export function recommendPublications (publicationList, page = 0) {
  return axios.post(`${algoBaseUrl()}recommendPublication/${page}`, publicationList)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err
    })
}
