import { objectType } from '@nexus/schema'

export const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id()
    t.model.companyName()
    t.model.website()
    t.model.user()
    t.model.userId()
  },
})
