import { objectType, enumType } from '@nexus/schema'

export const PhoneType = enumType({
  name: 'PhoneType',
  members: ['WORK', 'PERSONAL', 'MOBILE', 'COMPANY'],
})

export const Phone = objectType({
  name: 'Phone',
  definition(t) {
    t.model.id()
    t.model.number()
    t.model.type()
    t.model.profileId()
    t.model.profile()
  },
})
