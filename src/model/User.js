'use strict'

export default class User {
  constructor () {
    this.id = ''
    this.gender = ''
    this.userName = ''
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.information = ''
    this.imageUrl = ''
    this.enable = false
    this.createdAt = ''
    this.lastPasswordChange = ''
    this.roles = []
    this.career = []
    this.organization = []
    this.authorities = []
  }

  toJSON () {
    return {
      id: this.id,
      gender: this.gender,
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      information: this.information,
      enable: this.authorities.enable,
      createdAt: this.createdAt,
      lastPasswordChange: this.lastPasswordChange,
      roles: this.roles,
      imageUrl: this.imageUrl,
      career: this.career,
      organization: this.organization,
      authorities: this.authorities
    }
  }
}
