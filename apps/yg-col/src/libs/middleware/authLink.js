import { setContext } from 'apollo-link-context'
import { getStorageItem } from '../storage'
import { lfUser } from '../../stores/user'

export const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await getStorageItem('token', lfUser)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
