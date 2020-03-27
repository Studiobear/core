import localForage from 'localforage'

let storageKeys = {}

export const createStorageInstance = name =>
  localForage.createInstance({ name, storeName: name })

export const removeStorageInstance = (name, storeName) =>
  localForage.dropInstance({ name, storeName })

export const setStorageItem = async (key, item, instance) =>
  instance
    .setItem(key, item)
    .then(() => {
      if (!storageKeys.hasOwnProperty(key)) storageKeys[key] = instance
      return true
    })
    .catch(error => {
      console.log(error)
      return false
    })

export const getStorageItem = async (key, instance) =>
  instance
    .getItem(key)
    .then(val => val)
    .catch(error => console.log(error))

export const removeStorageItem = async (key, instance) =>
  instance
    .removeItem(key)
    .then(() => (storageKeys[key] = undefined))
    .catch(error => console.log(error))

export const getStorageKeys = (instance) => instance
  .keys()
  .then(val => val)
  .catch(error => console.log(error))
