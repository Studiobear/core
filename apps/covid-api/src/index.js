const CronJob = require('cron').CronJob
import { getUS_CA_County, parseUS_CA_County, writeUS_CA_County } from './lib'

const generateUS_CA_County = async () => {
  let data = await getUS_CA_County()
  let parsed = await parseUS_CA_County(data)
  return writeUS_CA_County(parsed)
}

const job = new CronJob('0 */1 * * * *', function() {
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
