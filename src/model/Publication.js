'use strict'

export default class Publication {
  constructor () {
    this.id = ''
    this.mainTitle = ''
    this.abstractContent = ''
    this.publicationType = ''
    this.publishDate = ''
    this.collections = []
    this.authors = []
    this.otherId = {}
  }

  toJSON () {
    return {
      id: this.id,
      mainTitle: this.mainTitle,
      abstractContent: this.abstractContent,
      publicationType: this.publicationType,
      publishDate: this.publishDate,
      collections: this.collections,
      authors: this.authors,
      otherId: this.otherId
    }
  }
}
