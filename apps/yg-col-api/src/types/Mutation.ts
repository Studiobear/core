import { mutationType, stringArg } from '@nexus/schema'

import { register, login } from './mutations'

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser()
  },
})
