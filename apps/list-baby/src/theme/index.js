import { writable } from 'svelte/store'
import { typography, fontLink } from '@studiobear/svelte-system-ui'
import kirkhamTheme from 'typography-theme-kirkham'

import mainTheme from './themeListBaby'

const basic = typography(mainTheme, kirkhamTheme)
let dark = Object.assign({}, basic)
dark.colors = mainTheme.colors.modes.dark
dark.mode = 'dark'
basic.mode = 'light'
console.log('theme: ', basic, dark)
function createTheme() {
  const { subscribe, set, update } = writable(basic)

  return {
    subscribe,
    dark: () => update(t => dark),
    light: () => update(t => basic),
    reset: set(basic),
  }
}

const theme = createTheme()
const googleFonts = fontLink(kirkhamTheme)

export { theme, basic, dark, googleFonts }
export default theme