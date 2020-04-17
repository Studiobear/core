import { rule, shield, and, or, not } from 'graphql-shield'
import { getUserId } from './auth'

const rules = {
  isAuth: rule({ cache: 'contextual' })((parent, args, context) => {
    console.log('isAuth: ', Boolean(context.user && context.userId))
    return Boolean(context.user && context.userId)
  }),
  isManager: rule({ cache: 'strict' })((parent, args, context) => {
    return Boolean(context.user.role === 'MANAGER')
  }),
  isAdmin: rule()((parent, args, context) => {
    console.log('isAdmin: ', Boolean(context.user && context.userId))
    return Boolean(
      context.user.role === 'ADMIN' || context.user.role === 'SUPER',
    )
  }),
  isSuper: rule()((parent, args, context) => {
    console.log('isSuper: ', Boolean(context.user && context.userId))
    return Boolean(context.user.role === 'SUPER')
  }),
}

export const permissions = shield(
  {
    Query: {
      me: rules.isAuth,
    },
    Mutation: {
      register: and(rules.isAuth, rules.isAdmin),
      login: not(rules.isAuth),
    },
  },
  { debug: true },
)
