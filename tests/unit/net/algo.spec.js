/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* global it */
/* global describe */
/* global beforeEach */
import { expect } from 'chai'
import { recommendPublications } from '@/net/spring'
import People from '@/model/People'
import Publication from '@/model/Publication'

describe.skip('Algo Part', () => {
  it('recommendPublications', async () => {
    const res = await recommendPublications([], 0)
    expect(res).to.be.not.null
  })
})
