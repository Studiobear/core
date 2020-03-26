require('dotenv').config()
const CronJob = require('cron').CronJob
import { getUS_CA_County, parseUS_CA_County, writeUS_CA_County } from './lib'
import { parseUS_CA_CountyGQL, writeUS_CA_CountyGQL } from './lib'

const mode = process.env.NODE_ENV
const dev = mode === 'development'

// const API_URL = dev ? process.env.GRAPHQL_API_TEST : GRAPHQL_API

const generateUS_CA_CountyGQL = async () => {
  let data = await getUS_CA_County()
  let parsed = await parseUS_CA_CountyGQL(data)
  return writeUS_CA_CountyGQL(parsed)
}

generateUS_CA_CountyGQL()

/*
const generateUS_CA_County = async () => {
  let data = await getUS_CA_County()
  let parsed = await parseUS_CA_County(data)
  return writeUS_CA_County(parsed)
}
*/

//const job = new CronJob('0 */15 * * * *', function() {
//  let d = Date(Date.now())
//  generateUS_CA_County()
//  console.log('US_CA_County data generated at ' + d.toString())
//})
//job.start()

/*
setInterval(function() {
  let d = Date(Date.now())
  generateUS_CA_County()
  console.log('Run at ' + d.toString())
}, 30000)
*/

// generateUS_CA_County()

/*
const gqlUS_CA_County = async () => {
  let data = await getUS_CA_County()
  let parsed = await parseUS_CA_County(data)
  return queryUS_CA_County(API_URL, parsed)
}

gqlUS_CA_County()
*/
