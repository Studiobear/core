import { validatePassword, createToken } from '../../util/auth'

export const login = async (
  username: string,
  password: string,
  userContext: any,
) => {
  const user = await userContext({ username })

  if (!user || !user.password) {
    throw new Error(`No user found for username: ${username}`)
  }

  const validPassword = await validatePassword(password, user.password)

  if (!validPassword) {
    throw new Error('Incorrect password')
  }

  return {
    token: await createToken(user.id),
    user,
  }
}
