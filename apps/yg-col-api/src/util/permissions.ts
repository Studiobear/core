import { rule, shield, and, not, allow } from 'graphql-shield'

const rules = {
  isAuth: rule({ cache: 'contextual' })((parent, args, context) => {
    return Boolean(context.user && context.userId)
  }),
  isManager: rule({ cache: 'strict' })((parent, args, context) => {
    return Boolean(context.user.role === 'MANAGER')
  }),
  isAdmin: rule()((parent, args, context) => {
    return Boolean(
      context.user.role === 'ADMIN' || context.user.role === 'SUPER',
    )
  }),
  isSuper: rule()((parent, args, context) => {
    return Boolean(context.user.role === 'SUPER')
  }),
}

export const permissions = shield(
  {
    Query: {
      empty: allow,
      me: rules.isAuth,
      allUsers: and(rules.isAuth, rules.isAdmin),
      collection: rules.isAuth,
      allCollections: rules.isAuth,
      work: rules.isAuth,
      allWorks: rules.isAuth,
    },
    Mutation: {
      register: and(rules.isAuth, rules.isAdmin),
      login: not(rules.isAuth),
    },
  },
  { debug: true },
)
