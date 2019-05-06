/* eslint-disable no-unused-vars */
import axios from 'axios'
import { algoBaseUrl } from './config'

export async function recommendPublications (publicationList) {
  try {
    const res = await axios.post(`${algoBaseUrl()}recommendPublication/`, publicationList)
    return res.data
  } catch (err) {
    console.log(err)
    throw err
  }
}
