import { writable, derived } from 'svelte/store'
// import { toTheme } from '@theme-ui/typography'
import verticalRhythm from 'compass-vertical-rhythm'
import {
  toUnitless,
  getScale,
  getSpace,
  getFonts,
  getFontSizes,
  getLineHeights,
  getFontWeights,
} from '@theme-ui/typography/src/to-theme'
import stAnnesTheme from 'typography-theme-st-annes'

// import { merge } from '../utils'
import merge from 'deepmerge'

import basicTheme from './basic'
import darkTheme from './dark'

const defaults = {
  baseFontSize: 16,
  baseLineHeight: 1.45,
  headerLineHeight: 1.1,
  scaleRatio: 2,
  googleFonts: [],
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: ['georgia', 'serif'],
  headerWeight: 'bold',
  bodyWeight: 'normal',
  boldWeight: 'bold',
  includeNormalize: true,
  blockMarginBottom: 1,
}

const styles = basicTheme.styles

export const toTheme = (_opts = {}) => {
  const opts = { ...defaults, ..._opts }
  // enforce unitless values
  opts.baseFontSize = toUnitless(opts.baseFontSize)
  opts.rhythmUnit = 'px'
  const typo = verticalRhythm(opts)
  const theme = {}
  typo.options = opts
  console.log('toTheme: ', typo, _opts)
  theme.space = getSpace(typo, opts)
  theme.fonts = getFonts(typo, opts)
  theme.fontSizes = getFontSizes(typo, opts)
  theme.fontWeights = getFontWeights(typo, opts)
  theme.lineHeights = getLineHeights(typo, opts)

  return {
    ...theme,
    styles,
    typography: typo,
  }
}

const typographyStyles = toTheme(stAnnesTheme)

console.log('typographyStyles: ', typographyStyles)

const basicStyles = merge(basicTheme.styles, typographyStyles)
const darkStyles = merge(darkTheme.styles, typographyStyles)
const basic = merge(merge(basicTheme, typographyStyles), basicStyles)
const dark = merge(merge(darkTheme, typographyStyles), basicStyles)

function createTheme() {
  const { subscribe, set, update } = writable(basicStyles)

  return {
    subscribe,
    dark: () => update(t => dark),
    reset: () => set(basic),
  }
}

const theme = createTheme()

export { theme, basic, dark }
export default theme
