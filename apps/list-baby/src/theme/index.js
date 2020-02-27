import { writable, derived } from 'svelte/store'
import { typography } from 'svelte-system-ui'
import kirkhamTheme from 'typography-theme-kirkham'

import basicTheme from './basic'

const basic = typography(basicTheme, kirkhamTheme)
let dark = Object.assign({}, basic)
dark.colors = basicTheme.colors.modes.dark

function createTheme() {
  const { subscribe, set, update } = writable(basic)

  return {
    subscribe,
    setDark: () => update(t => dark),
    setLight: () => update(t => basic),
    reset: set(basic),
  }
}

const theme = createTheme()

export { theme, basic, dark }
export default theme
