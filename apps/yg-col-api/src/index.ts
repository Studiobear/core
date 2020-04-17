import express from 'express'
import createApolloServer from './server'
import { schema } from './schema'
import { logger, formatError } from './util'

const GRAPHQL_ENDPOINT = '/graphql'
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

export const app = express()

app.post(GRAPHQL_ENDPOINT)

export const server = createApolloServer(app, schema, {
  graphqlEndpoint: GRAPHQL_ENDPOINT,
  apolloServerOptions: { formatError },
})

server.listen({ port: PORT }, () => {
  logger.info(
    `GraphQL Server is running on http://localhost:${PORT}${GRAPHQL_ENDPOINT} in "${NODE_ENV}" mode\n`,
  )
})
