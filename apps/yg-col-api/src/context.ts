import { PrismaClient } from '../node_modules/@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export interface Context {
  token: any
  user: any
  userId: any
  prisma: any
  req: any
  res: any
}

export function createContext(
  token?: any,
  user?: any,
  userId?: any,
  req?: Request,
  res?: Response,
): Context {
  return { token, user, userId, req, res, prisma }
}
