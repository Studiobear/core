import * as bcrypt from 'bcryptjs'
import { verify, sign } from 'jsonwebtoken'
import { Context } from '../context'

export const APP_SECRET = process.env.APP_SECRET || ''

interface Token {
  userId: string
}

export const getUserId = (context: Context) => {
  const Authorization = context.req.headers['authorization']
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && verifiedToken.userId
  }
  return
}

export const createToken = async (userId: string) => {
  const secret = APP_SECRET ? APP_SECRET : '123'
  return sign({ userId: userId }, secret)
}

export const hashedPassword = async (password: string): Promise<string> => {
  const hash: string = await new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) reject(err)
      resolve(hash)
    })
  })
  return hash
}

export const validatePassword = async (password: string, stored: string) =>
  bcrypt.compare(password, stored)
