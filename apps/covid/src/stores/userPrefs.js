import { writable } from 'svelte/store'
import {
  createStorageInstance,
  setStorageItem,
  getStorageItem,
  getStorageKeys,
} from '../libs'

const lfUserPrefs = createStorageInstance('userPrefs')
let prefs = { mode: 'light' }

const setMode = mode => {
  console.log('setMode: ', mode)
  setStorageItem('mode', mode, lfUserPrefs)
  return {...prefs, mode}
}

const createUserPrefs = () => {
  const { subscribe, set, update } = writable(prefs)

  return {
    subscribe,
    dark: () => update(n => setMode('dark')),
    light: () => update(n => setMode('light')),
    reset: set(prefs),
  }
}

const storeUserPrefs = createUserPrefs()

export { storeUserPrefs, lfUserPrefs }
export default storeUserPrefs
