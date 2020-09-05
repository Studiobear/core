import { config, createLogger, format, transports } from 'winston'
import { inspect } from 'util'

const options = {
  file: {
    level: 'info',
    filename: '../logs/app.log',
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
  },
}

const logger = createLogger({
  level: 'info',
  levels: config.npm.levels,
  format: format.combine(
    format.errors({ stack: true }),
    format.colorize(),
    format.splat(),
    format.timestamp({ format: 'YY/MM/DD HH:mm' }),
    format.printf(
      (info) =>
        `${info.timestamp} - ${info.level}: ${JSON.parse(
          JSON.stringify(inspect(info.message)),
        )}`,
    ),
  ),
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
})

export default logger
