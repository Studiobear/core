import { writable } from 'svelte/store'
import {
  createStorageInstance,
  setStorageItem,
  getStorageItem,
  getStorageKeys,
} from '../libs/storage'

const lfUser = createStorageInstance('user')
let prefs = { token: undefined }

const setAuth = (prev, tok) => {
  // console.log('setLocation: ', prev, loc)
  setStorageItem('token', tok, lfUser)
  return { ...prev, token: tok }
}

const createUser = () => {
  const { subscribe, set, update } = writable(prefs)

  return {
    subscribe,
    auth: (tok) => update((n) => setAuth(n, tok)),
    reset: set(prefs),
  }
}

const storeUser = createUser()

export { storeUser, lfUser }
export default storeUser
