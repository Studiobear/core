import { objDateToArry } from './index'

const parseC19CACountyStats = async (d, region, numberfy = false) => {
  let combined = {}
  return Promise.all(
    d.map(async item => {
      let itemData = {}
      let itemCategory = {}
      let dateItems = await objDateToArray(item, true)
      let category = {
        total: numberfy ? +item.TOTALS : item.TOTALS,
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
export const calcC19CACountyStats = async (d, region) => {
  const parseData = await parseC19CACountyStats(d, region, true)
    .then(res => res)
    .catch(err => {
      console.log('calcStats err: ', err)
      return 'ERROR!'
    })
  return parseData
}
