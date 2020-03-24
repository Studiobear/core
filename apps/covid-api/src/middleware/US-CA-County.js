import { readFile, writeFile, calcC19CACountyStats } from '../lib'

const dataPath = './public/covid19_US_CA_County.json'

const CACountyURL =
  'https://files.sfchronicle.com/project-feeds/covid19_us_cases_ca_by_county_.json'

export const getUS_CA_County = async (req, res, next) =>
  axios({
    method: 'get',
    url:
      'https://files.sfchronicle.com/project-feeds/covid19_us_cases_ca_by_county_.json',
  })
    .then(async (resp) => {
      req.data = resp.data
      return req.data ? next() : (res.statusCode = 401) && res.end('No data!')
    })
    .catch((err) => {
      send((res.statusCode = 401) && res.end('No data!'), 404)
    })

export const parseUS_CA_County = async (req, res, next) => {
  calcC19CACountyStats(req.data, 'CALIFORNIA')
    .then(async (resp) => {
      req.data = resp
      console.log(await resp)
      return req.data ? next() : (res.statusCode = 401) && res.end('No data!')
    })
    .catch((err) => {
      send((res.statusCode = 401) && res.end('No data!'), 404)
    })
}
export const writeUS_CA_County = async (req, res, next) => {
  readFile(
    (data) => {
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('US_CA_COUNTY written')
      })
    },
    true,
    dataPath,
  )
}
