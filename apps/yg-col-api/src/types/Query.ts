import { objectType } from 'nexus'
import { getUser } from './queries'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => getUser(ctx),
    })
    t.crud.users()
    t.crud.collection()
    t.crud.collections()
    t.crud.work()
    t.crud.works()
  },
})
