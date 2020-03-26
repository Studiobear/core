import axios from 'axios'
import { writeFile } from './fs'
import { calcC19CACountyStatsGQL } from './parseGQL'
import { resolve } from 'path'

const dataPath = './public/covid19_US_CA_CountyGQL.js'

export const parseUS_CA_CountyGQL = async data =>
  calcC19CACountyStatsGQL(data, 'CALIFORNIA')
    .then(async resp => resp)
    .catch(err => {
      throw new Error(`getUS_CA_County: ${err}`)
    })

export const writeUS_CA_CountyGQL = async data => {
  let exportWrap = `module.exports = ${JSON.stringify(data, null, 2)}`
  return writeFile(
    exportWrap,
    () => {
      return console.log('US_CA_County JS written')
    },
    dataPath,
  )
}
