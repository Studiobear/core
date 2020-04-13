import { PrismaClient } from '../../../../node_modules/@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export interface Context {
  prisma: any
  req: any
  res: any
}

export function createContext(req?: Request, res?: Response): Context {
  return { req, res, prisma }
}
