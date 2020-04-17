import { objectType, enumType } from '@nexus/schema'

export const Type = enumType({
  name: 'Type',
  members: ['PAINTING', 'SCULPTURE', 'MIXED'],
})

export const Category = enumType({
  name: 'Category',
  members: ['FLORAL', 'ABSTRACT', 'INDIAN', 'LANDSCAPE', 'PORTRAIT'],
})

export const Work = objectType({
  name: 'Work',
  definition(t) {
    t.model.id()
    t.model.catalogId()
    t.model.title()
    t.model.medium()
    t.model.dimensions()
    t.model.date()
    t.model.type()
    t.model.price()
    t.model.category()
    t.model.collections()
    t.model.workOrder()
  },
})
