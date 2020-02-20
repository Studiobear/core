import { writable, derived } from 'svelte/store'
import { toTheme } from '@theme-ui/typography'
import stAnnesTheme from 'typography-theme-st-annes'

import basic from './basic'
import dark from './dark'

const basicTypog = toTheme(stAnnesTheme)
const darkTypog = toTheme(stAnnesTheme)

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
