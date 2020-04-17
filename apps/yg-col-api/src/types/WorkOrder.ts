import { objectType } from '@nexus/schema'

export const WorkOrder = objectType({
  name: 'WorkOrder',
  definition(t) {
    t.model.order()
    t.model.collectionId()
    t.model.collection()
    t.model.workId()
    t.model.work()
  },
})
