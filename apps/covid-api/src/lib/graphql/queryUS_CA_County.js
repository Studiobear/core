import axios from 'axios'

/* For use with c19
 * NOT USED AT THE MOMENT
 *
 *
 */

const DEFAULT_API_URL = 'http://localhost:3000'

const query = async (url, item) =>
  await axios.post(
    url,
    {
      query: `mutation updateUserCity($id: Int!, $city: String!) {
    locationExists(name: $location_name){
      id
    }
  }`,
      variables: {
        location_name: item.location,
        sublocation_name: item.sublocation,
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

export const queryUS_CA_County = async (url, data) => {
  data.map(item => {
    const { name, sublocation } = item
    return query(url, { name, sublocation })
  })
}
