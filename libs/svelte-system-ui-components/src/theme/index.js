import { writable, derived } from 'svelte/store'
import { typography } from 'svelte-system-ui'
import stAnnesTheme from 'typography-theme-st-annes'

import basicTheme from './basic'

const basic = typography(basicTheme, stAnnesTheme)

function createTheme() {
  const { subscribe, set, update } = writable(basic)
  const dark = basic
  basic.colors = basic.colors.modes.dark
  return {
    subscribe,
    setMode: () => update(t => dark),
    unsetMode: () => set(basic),
  }
}

const theme = createTheme()

export { theme, basic }
export default theme
