import polka from 'polka'
import axios from 'axios'
import send from '@polka/send-type'
import sirv from 'sirv'
import compress from 'compression'
import { readFile, writeFile, calcC19CACountyStats } from './lib'
import { resolve } from 'path'

const dataPath = resolve('./public/covid19_US_CA_County.json')

const assets = sirv('public', {
  maxAge: 1800,
  immutable: true,
  extensions: ['json'],
})

const CACountyURL =
  'https://files.sfchronicle.com/project-feeds/covid19_us_cases_ca_by_county_.json'

const getUS_CA_County = async (req, res, next) =>
  axios({
    method: 'get',
    url:
      'https://files.sfchronicle.com/project-feeds/covid19_us_cases_ca_by_county_.json',
  })
    .then(async resp => {
      req.data = resp.data
      return req.data ? next() : (res.statusCode = 401) && res.end('No data!')
    })
    .catch(err => {
      send((res.statusCode = 401) && res.end('No data!'), 404)
    })

const parseUS_CA_County = async (req, res, next) => {
  calcC19CACountyStats(req.data, 'CALIFORNIA')
    .then(async resp => {
      req.data = resp
      console.log(await resp)
      return req.data ? next() : (res.statusCode = 401) && res.end('No data!')
    })
    .catch(err => {
      send((res.statusCode = 401) && res.end('No data!'), 404)
    })
}
const writeUS_CA_County = async (req, res, next) => {
  readFile(
    data => {
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('US_CA_COUNTY written')
      })
    },
    true,
    dataPath,
  )
}

polka()
  .use(getUS_CA_County, parseUS_CA_County, writeUS_CA_County)
  .get('/cases/usa/ca/local', (req, res) => {
    send(res, 200, req.data)
  })
  .listen(3100, err => {
    if (err) throw err
    console.log(`> Running on localhost:3100`)
  })
