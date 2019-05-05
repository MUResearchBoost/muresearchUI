/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* global it */
/* global describe */
/* global beforeEach */
import { expect } from 'chai'
import * as Spring from '@/net/spring'
import People from '@/model/People'
import Publication from '@/model/Publication'
import SearchState from '@/model/SearchState'
import User from '@/model/User'

describe('About Search', () => {
  it('searchBySearchState', async () => {
    let s = new SearchState()
    s.pages = 0
    s.rawSearchText = ['RNA']
    const searchResult = await Spring.searchBySearchState(s.toJSON())
    expect(searchResult).to.be.not.null
  })

  it('searchByRawText', async () => {
    const searchResult = await Spring.searchByRawText('RNA')
    expect(searchResult).to.be.not.null
  })

  it('searchPeopleBySearchState', async () => {
    let s = new SearchState()
    const searchResult = await Spring.searchPeopleBySearchState(s)
    expect(searchResult).to.be.not.null
  })

  it('searchPeopleByRawText', async () => {
    const searchResult = await Spring.searchPeopleByRawText('RNA')
    expect(searchResult).to.be.not.null
  })

  it('searchPublicationBySearchState', async () => {
    let s = new SearchState()
    const searchResult = await Spring.searchPublicationBySearchState(s)
    expect(searchResult).to.be.not.null
  })

  it('searchPublicationByRawText', async () => {
    const searchResult = await Spring.searchPublicationByRawText('RNA')
    expect(searchResult).to.be.not.null
  })
})

describe.skip('About User', () => {
  let id = 0

  beforeEach(() => {
    id = 0
  })

  it('createUser', async () => {
    let u = new User()
    u.id = id
    const res = await Spring.createUser(u)
    expect(res).to.be.not.null
  })

  it('getUserById', async () => {
    const res = await Spring.getUserById(id)
    expect(res).to.be.not.null
  })
})

describe('About Related', () => {
  it('getRelatedPeople', async () => {
    let p = new People()
    const res = await Spring.getRelatedPeople(p)
    expect(res).to.be.not.null
  })

  it('getRelatedPublication', async () => {
    let p = new Publication()
    const res = await Spring.getRelatedPublication(p)
    expect(res).to.be.not.null
  })
})

describe.skip('About Publication', () => {
  it('getRandomPublication', async () => {
    const res = await Spring.getRandomPublication()
    expect(res).to.be.not.null
  })

  it('getPublicationById', async () => {
    const res = await Spring.getPublicationById(0)
    expect(res).to.be.not.null
  })
})

describe.skip('About People', () => {
  it('getRandomPeople', async () => {
    const res = await Spring.getRandomPeople()
    expect(res).to.be.not.null
  })

  it('getPeopleById', async () => {
    const res = await Spring.getPeopleById(0)
    expect(res).to.be.not.null
  })

  it('getPeopleByName', async () => {
    const res = await Spring.getPeopleByName('')
    expect(res).to.be.not.null
  })
})

describe.skip('About Auth', () => {
  it('', () => {

  })
})

describe.skip('About Auto-Complete', () => {
  it('', () => {

  })
})

describe.skip('About PeopleNameToPublications', () => {
  it('getPublicationsByPeopleName', async () => {
    const res = await Spring.getPublicationsByPeopleName('')
    expect(res).to.be.not.null
  })
})
