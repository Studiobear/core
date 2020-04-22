import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import { applyMiddleware as applyGraphQLMiddleware } from 'graphql-middleware'
import { createContext } from './context'
import { permissions } from './util'
import { Express } from 'express'

export default function createApolloServer(
  app: Express,
  schema: any,
  {
    // Main options
    graphqlEndpoint = '',
    graphqlMiddlewares = [],
    dataSources = () => ({}),
    // Apollo Engine
    engineKey = '',
    // HTTP options
    cors = false,
    timeout = 120000,
    // Extra options for Apollo Server
    apolloServerOptions = {},
  },
) {
  // Apollo server options
  const options = {
    ...apolloServerOptions,
    schema: applyGraphQLMiddleware(schema, permissions, ...graphqlMiddlewares),
    tracing: true,
    cacheControl: true,
    introspection: true,
    playground: true,
    engine: engineKey ? { apiKey: engineKey } : false,
    dataSources,
    // Resolvers context in POST requests
    context: createContext,
  }

  // Apollo Server
  const server = new ApolloServer(options)

  // Express middleware
  server.applyMiddleware({
    app,
    path: graphqlEndpoint,
    // gui: {
    //   endpoint: graphqlEndpoint,
    //   subscriptionEndpoint: graphqlSubscriptionsPath,
    // },
  })

  // Create HTTP server and add subscriptions
  const httpServer = createServer(app)
  httpServer.setTimeout(timeout)
  server.installSubscriptionHandlers(httpServer)

  return httpServer
}
