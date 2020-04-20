import { mutationType, stringArg } from '@nexus/schema'

import { register, login } from './mutations'

export const Mutation = mutationType({
  definition(t) {
    t.field('register', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        password: stringArg(),
        email: stringArg(),
      },
      resolve: (_, { name, password, email }, ctx) =>
        register(name, password, email, ctx.prisma.user),
    })

    t.field('login', {
      type: 'AuthPayload',
      args: { username: stringArg(), password: stringArg() },
      resolve: (_, { username, password }, ctx) => {
        console.log('login', username, password)
        return login(username, password, ctx.prisma.user)
      },
    })

    t.crud.upsertOneCollection({ computedInputs: {} })
    t.crud.upsertOneWork({})
    t.crud.deleteOneCollection()
    t.crud.deleteOneWork()
  },
})
