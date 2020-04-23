import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

import { authLink, cache } from './middleware'

const graphqlUrl = process.env.GRAPHQL_URL

const httpLink = new HttpLink({
  uri: graphqlUrl,
  credentials: 'include',
})

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    authLink,
    httpLink,
  ]),
  cache,
})
