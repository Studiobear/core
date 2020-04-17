import { inspect } from 'util'
import logger from './logger'

const searchOriginalError = (error: any) => {
  if (error.originalError) {
    const message = error.message
    const code = error.extensions.code
    logger.error(message)
    return { message, code }
  }
  if (error.errors) {
    logger.info('Errors')
    logger.error(JSON.parse(JSON.stringify(inspect(error.errors))))
    return error.errors.map(searchOriginalError)[0]
  }
  logger.info('searchOriginalErrors')
  logger.error(JSON.parse(JSON.stringify(inspect(error))))
  return error
}

export const formatError = (error: any) => {
  // This can be used to send errors to third
  // party services like Sentry or Stackdriver
  const originalError = searchOriginalError(error)
  if (!originalError) {
    logger.error(JSON.parse(JSON.stringify(inspect(error))))
  } else {
    return originalError
  }
}

export class AuthenticationError extends Error {
  public code?: number
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, AuthenticationError.prototype)
    this.code = 401
    this.message = 'Not authenticated.'
  }
}

export class AuthorizationError extends Error {
  public code?: number
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, AuthorizationError.prototype)
    this.code = 401
    this.message = 'Not authorized.'
  }
}

export class WrongArgumentsError extends Error {
  public code?: number
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, WrongArgumentsError.prototype)
    this.code = 400
    this.message = `Incorrect arguments : ${this.message}`
  }
}

export class ServiceUnavailableError extends Error {
  public code?: number
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype)
    this.code = 503
    this.message = `At least one service is unresponding ${this.message}`
  }
}

export class PrismaError extends Error {
  public code?: number
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, PrismaError.prototype)
    this.code = 500
    this.message = `Prisma Internal Error. ${this.message}`
  }
}
