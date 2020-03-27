import { writable } from 'svelte/store'
import {
  createStorageInstance,
  setStorageItem,
  getStorageItem,
  getStorageKeys,
} from '../libs'

const userPrefs = createStorageInstance('userPrefs')
const keys =  getStorageKeys(userPrefs)
let prefs = { mode: 'light'}

if(keys.hasOwnProperty('mode')){
  prefs.mode = getStorageItem('mode', userPrefs)
} else {
  prefs.mode = 'light'
  setStorageItem('mode', 'light', userPrefs)
}

const setMode = mode => {
  setStorageItem('mode', mode, userPrefs)
  return mode
}

function createUserPrefs() {
  const { subscribe, set, update } = writable(prefs)

  return {
    subscribe,
    dark: () => update(setMode),
    light: () => update(setMode),
    reset: set(prefs),
  }
}

const storeUserPrefs = createUserPrefs()

export { storeUserPrefs }
export default storeUserPrefs