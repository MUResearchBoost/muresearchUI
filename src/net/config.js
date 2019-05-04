'use strict'

export const httpSchema = 'http'
export const proxyIp = '35.236.122.104'
export const proxyPort = '8000'
export const springPrefix = 'be'
export const springApiVersion = 'api/test'
export const algoPrefix = 'algo'
export const algoApiVersion = ''

export function springBaseUrl () {
  return `${httpSchema}://${proxyIp}:${proxyPort}/${springPrefix}/${springApiVersion}/`
}

export function algoBaseUrl () {
  return `${httpSchema}://${proxyIp}:${proxyPort}/${algoPrefix}/`
}
