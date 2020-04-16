import { mutationType, stringArg } from '@nexus/schema'

import { register, login } from './mutations'

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser(),
      t.field('register', {
        type: 'AuthPayload',
        args: {
          username: stringArg(),
          password: stringArg(),
          email: stringArg(),
        },
        resolve: (_, { username, password, email }, ctx) =>
          register(username, password, email, ctx.prisma.createUser),
      })

    t.field('login', {
      type: 'AuthPayload',
      args: { username: stringArg(), password: stringArg() },
      resolve: (_, { username, password }, ctx) =>
        login(username, password, ctx.prisma.user),
    })
  },
})
