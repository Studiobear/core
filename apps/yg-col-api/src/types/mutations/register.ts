import { hashedPassword, createToken } from '../../util/auth'

export const register = async (
  name: any,
  password: any,
  email: any,
  createUser: any,
) => {
  const hashed = await hashedPassword(password)
  const user = await createUser.create({
    data: {
      username: email,
      password: hashed,
      email,
      display: name,
    },
  })

  const token = await createToken(user.id)

  return {
    token,
    user,
  }
}
