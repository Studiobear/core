import express from 'express'
import createApolloServer from './server'
import { schema } from './schema'
import { logger, formatError } from './util'
import cors from 'cors'

const GRAPHQL_ENDPOINT = '/graphql'
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

const whitelist = ['http://localhost:5000', process.env.CLIENT_URL]
const corsOptions: any = {
  origin: (origin: string, callback: any) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

export const app = express()

app.use(cors(corsOptions))
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
