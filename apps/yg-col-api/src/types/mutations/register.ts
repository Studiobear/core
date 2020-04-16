import { slugify } from '../../util'
import { hashedPassword, createToken } from '../../util/auth'

export const register = async (
  username: any,
  password: any,
  email: any,
  createUser: any,
) => {
  const hashed = await hashedPassword(password)
  const slugged = await slugify(username)

  const user = await createUser({
    username: slugged,
    password: hashed,
    profile: {
      create: { email, name: slugged, visibility: 'PRIVATE', type: 'PERSONAL' },
    },
    handle: slugged,
  })

  const token = await createToken(user.id)

  return {
    token,
    user,
  }
}
