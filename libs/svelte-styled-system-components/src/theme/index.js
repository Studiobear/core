import { writable, derived } from 'svelte/store'
import { toTheme } from '../utils'

import stAnnesTheme from 'typography-theme-st-annes'

// import { merge } from '../utils'
import merge from 'deepmerge'

import basicTheme from './basic'
import darkTheme from './dark'

const typographyStyles = toTheme(stAnnesTheme)
const basic = merge(basicTheme, typographyStyles)
const dark = merge(darkTheme, typographyStyles)

console.log('themeStyles: ', typographyStyles, basic)

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
