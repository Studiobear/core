module.exports = {
  queryConfig: {
    get: {
      all: 'all[Name]s',
      meta: '_all[Names]Meta',
    },
    post: {},
    input: {},
  },
  schema: 'schema.graphql',
  input: './public/covid19US_CA_CountyGQL.js',
  database: './public/db/covid19US_CA_CountyGQL.json',
  port: 3200,
}
