'use strict'

import Publication from './Publication'

export default class SearchState {
  constructor () {
    this.pages = ''
    this.scope = ''
    this.publications = new Publication()
    this.peoples = []
    this.rawSearchText = []
    this.searchType = []
  }

  toJSON () {
    return {
      pages: this.pages,
      scope: this.scope,
      publications: this.publications,
      peoples: this.peoples,
      rawSearchText: this.rawSearchText,
      searchType: this.searchType
    }
  }
}
