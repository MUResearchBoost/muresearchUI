/* eslint-disable no-unused-vars */
import * as Spring from './spring'
import People from '../model/People'
import Publication from '../model/Publication'
import Scope from '../model/Scope'
import SearchState from '../model/SearchState'
import User from '../model/User'

export default function main () {
  sampleTest(Spring.searchByRawText('RNA'))

  let s = new SearchState()
  s.pages = 0
  s.rawSearchText = ['RNA']
  console.log(s.toJSON())
  sampleTest(Spring.searchBySearchState(s.toJSON()))
}

function sampleTest (promise) {
  promise
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })
}
