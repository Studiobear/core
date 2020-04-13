import { rule, shield } from 'graphql-shield'
import { getUserId } from './auth'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
  },
})
