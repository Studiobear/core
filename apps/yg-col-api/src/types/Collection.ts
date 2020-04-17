import { objectType } from '@nexus/schema'

export const Collection = objectType({
  name: 'Collection',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.users({ filtering: true })
    t.model.works()
    t.model.workOrder()
  },
})
