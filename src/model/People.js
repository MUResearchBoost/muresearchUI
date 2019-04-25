'use strict'

export default class People {
  constructor () {
    this.id = ''
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.information = ''
    this.imageUrl = ''
    this.career = []
    this.organization = []
  }

  toJSON () {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      information: this.information,
      imageUrl: this.imageUrl,
      career: this.career,
      organization: this.organization
    }
  }
}
