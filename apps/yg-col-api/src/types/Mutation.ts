import { objectType } from '@nexus/schema'

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser()
  },
})
