import { objectType } from 'nexus'
import { getUser } from './queries'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.profile(),
      t.field('me', {
        type: 'User',
        nullable: true,
        resolve: (parent, args, ctx) => getUser(ctx),
      })
  },
})
