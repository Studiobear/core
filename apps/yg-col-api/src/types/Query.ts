import { objectType } from 'nexus'
import { getUserId } from '../util'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.profile(),
      t.field('me', {
        type: 'User',
        nullable: true,
        resolve: (parent, args, ctx) => {
          const userId = getUserId(ctx)
          if (!userId) {
            throw new Error('Invalid userId')
          }
          return ctx.prisma.user.findOne({
            where: {
              id: parseInt(userId),
            },
          })
        },
      })
  },
})
