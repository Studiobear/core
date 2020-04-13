import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType } from '@nexus/schema'

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.role()
    t.model.profile()
  },
})

const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id()
    t.model.companyName()
    t.model.website()
    t.model.user()
    t.model.userId()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.profile()
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser()
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Profile, User],
  plugins: [
    nexusPrismaPlugin({
      // Fixes the Cannot find NexusPrisma issue
      outputs: { typegen: __dirname + '/generated/index.ts' },
    }),
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
