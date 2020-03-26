import path from 'path'
import createGraphqlServer from '@phony/graphql'
import flush from '@phony/graphql/flush'
import config from './phony.config'

const start = async () => {
  const db = require(path.resolve(process.cwd(), config.database))
  await flush(db, config)
  createGraphqlServer(db, config)
}

start().catch(err => console.log(err))
