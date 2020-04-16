export * from './auth'
import logger from './logger'
export * from './permissions'

export { logger }

export const toLocalTime = (epoch: number): string => {
  const localDate = new Date(0)
  localDate.setUTCSeconds(epoch)
  const options = { year: 'numeric', month: 'long', day: '2-digit' }
  return `${localDate.toLocaleDateString(
    undefined,
    options,
  )} at ${localDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })}`
}

export function isDefined(d: any) {
  return d !== null && typeof d !== 'undefined'
}

export function isNull(d: any) {
  return d === null
}

export const isArray = Array.isArray

export function isObject(d: any) {
  return isDefined(d) && typeof d === 'object' && !Array.isArray(d)
}

export function isEmpty(obj: any) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export function validObject(object: any, ...keys: any[]) {
  return keys.reduce((a, b) => (a || {})[b], object) !== undefined
}

export function mergeDeep(target: any, ...sources: any[]): any {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }
  return mergeDeep(target, ...sources)
}

export function slugify(string: string): string {
  const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
