import { objectType, stringArg, intArg, arg } from '@nexus/schema'
import { getUser } from './queries'
import { paginateResults } from '../util'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('empty', { type: 'Boolean', nullable: true, resolve: () => false })
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => getUser(ctx),
    })
    t.crud.users({ alias: 'allUsers', filtering: true, ordering: true })
    t.crud.collection()
    t.crud.collections({
      alias: 'allCollections',
      filtering: true,
      ordering: true,
    })
    t.crud.work()
    t.crud.works({ alias: 'allWorks', filtering: true, ordering: true })
    t.field('worksByCollection', {
      type: 'Collection',
      args: {
        where: arg({ type: 'CollectionWhereInput' }),
        orderBy: arg({ type: 'WorkOrderByInput' }),
        skip: intArg(),
        after: intArg(),
        before: intArg(),
        first: intArg(),
        last: intArg(),
      },
      resolve: async (root, args, { prisma }) => {
        const allWorks = await prisma.collection.findOne({
          include: { works: true, workOrder: true },
          where: args.where || {},
        })
        console.log('worksByColl:', allWorks)
        const worksWithOrder = allWorks.works.map((work: any) => {
          const order = allWorks.workOrder.find(
            (w: any) => w.workId === work.id && w.collectionId === allWorks.id,
          )
          return { ...work, order }
        })

        return { ...allWorks, works: worksWithOrder }
      },
    })
  },
})
