import { PrismaClient } from '../node_modules/@prisma/client'
import { getUser } from './types'

const prisma = new PrismaClient()

export interface Context {
  token?: any
  user?: any
  userId?: string
  prisma: any
  req: any
  res: any
}

export const createContext = async (req?: any) => {
  const r = req.req
  const token = r && r.headers ? r.headers : undefined
  const user = await getUser({ req: r, prisma })
    .then((res: any) => res)
    .catch((err: any) => {
      throw new Error(err)
    })
  const userId = user && user.id ? user.id : undefined

  return { token, user, userId, req: r, res: req.res, prisma }
}
