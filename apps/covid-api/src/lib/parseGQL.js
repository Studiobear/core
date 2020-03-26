export const fatalityRate = d => (d.Deaths / d.Confirmed) * 100
export const recoveryRate = d => (d.Recovered / d.Confirmed) * 100

export const calcC19Stats = d => {
  let combined = {}
  let total_deaths = 0
  let total_confirmed = 0
  let total_active = 0
  let total_recovered = 0
  let last_updated = 0

  d.map(item => {
    item = item['attributes']
    var build_item = {
      Confirmed: item.Confirmed,
      Active: item.Confirmed - (item.Recovered + item.Deaths),
      Deaths: item.Deaths,
      Recovered: item.Recovered,
      Updated: item.Last_Update,
      SubRegion: {
        name: item.Province_State,
        Confirmed: item.Confirmed,
        Active: item.Active,
        Deaths: item.Deaths,
        Recovered: item.Recovered,
      },
    }
    if (item.Country_Region in combined) {
      combined[item.Country_Region].Confirmed += build_item.Confirmed
      combined[item.Country_Region].Active += build_item.Active
      combined[item.Country_Region].Deaths += build_item.Deaths
      combined[item.Country_Region].Recovered += build_item.Recovered
      combined[item.Country_Region].SubRegion = {
        [build_item.SubRegion.name]: { ...build_item.SubRegion },
        ...combined[item.Country_Region].SubRegion,
      }
    } else {
      combined[item.Country_Region] = build_item
      combined[item.Country_Region].SubRegion = {
        [build_item.SubRegion.name]: { ...build_item.SubRegion },
      }
    }
    total_deaths += item.Deaths
    total_confirmed += item.Confirmed
    total_active += item.Confirmed - (item.Recovered + item.Deaths)
    total_recovered += item.Recovered
    last_updated =
      item.Last_Update > last_updated ? item.Last_Update : last_updated
  })
  let updated = new Date(last_updated)
  return {
    totalConfirmed: total_confirmed,
    totalActive: total_active,
    totalDeaths: total_deaths,
    totalRecovered: total_recovered,
    totalFatalityRate: fatalityRate({
      Deaths: total_deaths,
      Confirmed: total_confirmed,
    }),
    totalRecoveryRate: recoveryRate({
      Recovered: total_recovered,
      Confirmed: total_confirmed,
    }),
    lastUpdated: `${updated.toLocaleDateString()} ${updated.toLocaleTimeString()}`,
    data: combined,
  }
}

export const insertCommas = num => {
  if (typeof num === 'number' && num > 999) {
    let num_parts = num.toString().split('.')
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return num_parts.join('.')
  }
  return num
}

const objDateToArray = async obj => {
  let dateArray = []
  const dateRegex = /(\d)+(\/){1}(\d)+(\/){1}(\d)+/
  for (let [key, value] of Object.entries(obj)) {
    if (dateRegex.test(key)) dateArray.push({ [key]: value })
  }
  return dateArray
}

const combineC19CACountyStats = async (d, region) => {
  let combined = {}
  return Promise.all(
    d.map(async item => {
      let itemData = {}
      let itemCategory = {}
      let dateItems = await objDateToArray(item)
      let category = {
        total: item.TOTALS,
        time: dateItems,
      }
      itemCategory = { [item.CATEGORY]: category }
      if (item.c2p_pubdate)
        combined = { updated: item.c2p_pubdate, ...combined }
      if (combined.hasOwnProperty(item.GEOGRAPHY)) {
        itemData = {
          [item.GEOGRAPHY]: { ...combined[item.GEOGRAPHY], ...itemCategory },
        }
      } else {
        itemData = { [item.GEOGRAPHY]: itemCategory }
      }
      // console.log('calcCountyItem: ', itemData)
      combined = { ...combined, ...itemData }
    }),
  ).then(res => {
    // console.log('parseC19', res, combined)
    return combined
  })
}

const internalizeGeographyName = data => {
  let newObj = Object.create({})
  let newData = []
  for (const prop in data) {
    if (data[prop].hasOwnProperty('cases')) {
      let tmpObj = { Name: prop, ...data[prop] }
      newData.push(tmpObj)
    } else {
      newObj = { ...newObj, [prop]: data[prop] }
    }
  }
  newObj = { ...newObj, data: newData }
  return newObj
}

export const calcC19CACountyStatsGQL = async (d, region) => {
  const parseData = await combineC19CACountyStats(d, region)
    .then(async res => {
      let newData = await internalizeGeographyName(res)
      return newData
    })
    .catch(err => {
      console.log('calcStats err: ', err)
      return 'ERROR!'
    })
  return parseData
}
