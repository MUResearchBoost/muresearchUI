'use strict'

export const httpSchema = 'http'
export const proxyIp = '35.247.68.0'
export const springPrefix = 'be'
export const springApiVersion = 'api/test'
export const algoPrefix = 'algo'
export const algoApiVersion = ''

export function springBaseUrl () {
  return `${httpSchema}://${proxyIp}/${springPrefix}/${springApiVersion}/`
}

export function algoBaseUrl () {
  return `${httpSchema}://${proxyIp}/${algoPrefix}/`
}
