import { objectType } from '@nexus/schema'

export const Image = objectType({
  name: 'Image',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.url()
    t.model.width()
    t.model.height()
    t.model.workId()
  },
})
