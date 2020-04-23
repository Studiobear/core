import { InMemoryCache } from 'apollo-cache-inmemory'

export const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      me: (_, { username }, { getCacheKey }) =>
        getCacheKey({ __typename: 'User', username }),
    },
  },
})
