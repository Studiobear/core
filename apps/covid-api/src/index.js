require('dotenv').config()
const CronJob = require('cron').CronJob
import {
  getUS_CA_County,
  parseUS_CA_County,
  writeUS_CA_County,
  ftpFile,
} from './lib'
import { resolve } from 'path'

console.log('ENV test: ', process.env.FTP_HOST)

const generateUS_CA_County = async () => {
  let data = await getUS_CA_County()
  console.log('data OK')
  let parsed = await parseUS_CA_County(data)
  console.log('parsed OK', parsed)
  let write = await writeUS_CA_County(parsed).then(res => {
    return ftpFile()
  })
}

const job = new CronJob('0 */15 * * * *', function() {
  let d = Date(Date.now())
  generateUS_CA_County()
  console.log('US_CA_County data generated at ' + d.toString())
})
job.start()

/*
setInterval(function() {
  let d = Date(Date.now())
  generateUS_CA_County()
  console.log('Run at ' + d.toString())
}, 30000)
*/

// generateUS_CA_County()
