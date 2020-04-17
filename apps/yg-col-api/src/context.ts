import { PrismaClient } from '../node_modules/@prisma/client'
import { Response } from 'express'

const prisma = new PrismaClient()

export interface Context {
  token?: any
  user?: any
  userId?: string
  prisma: any
  req: any
  res: any
}

export function createContext(req?: any): Context {
  const r = req.req
  const token = r && r.headers ? r.headers : undefined
  const user = r && r.user ? r.user : undefined
  const userId =
    req && req.headers && req.headers.userid ? req.headers.userid : undefined
  return { token, user, userId, req: r, res: req.res, prisma }
}
