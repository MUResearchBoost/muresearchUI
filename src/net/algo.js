/* eslint-disable no-unused-vars */
import axios from 'axios'
import { algoBaseUrl } from './config'

export async function recommendPublications (publicationList, page = 0) {
  try {
    const res = await axios.post(`${algoBaseUrl()}recommendPublication/${page}`, publicationList)
    return res.data
  } catch (err) {
    console.log(err)
    throw err
  }
}
