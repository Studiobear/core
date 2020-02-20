import { writable, derived } from 'svelte/store'

import basic from './basic'
import dark from './dark'

function createTheme() {
  const { subscribe, set, update } = writable(basic)

  return {
    subscribe,
    dark: () => update(t => dark),
    reset: () => set(basic),
  }
}

const theme = createTheme()

export { theme, basic, dark }
export default theme
