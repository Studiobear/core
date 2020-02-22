import { css } from 'goober'
import dlv from 'dlv'
import {
  compose,
  color,
  space,
  layout,
  typography,
  border,
} from 'styled-system'
import { shortHandAttributes } from './constants'

const createCssMisc = (attributes, theme, pseudoElementSelector) => {
  let cssMisc = {}

  for (let [name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name) || [name]
    for (let cssProp of name) {
      let cssPropValue
      let cssPropTmp

      if (cssProp.startsWith('_')) {
        cssProp = cssProp.replace('_', '&:')
        cssPropValue = createCssMisc(value, theme, cssProp)
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        return cssMisc
      }
      if (cssProp.endsWith('olor')) {
        cssPropTmp = { [cssProp]: value }
        cssPropTmp.theme = theme
        cssPropValue = color(cssPropTmp)
        cssMisc = Object.assign(cssMisc, cssPropValue)
        return cssMisc
      }
      if (cssProp.startsWith('margin' || 'padding')) {
        cssPropTmp = { [cssProp]: value }
        cssPropValue = color(cssPropTmp)
        cssPropTmp.theme = theme
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        return cssMisc
      }
      cssMisc = Object.assign(cssMisc, { [cssProp]: value })
    }
  }
  return cssMisc
}

const processCss = (attributes, theme, pseudoElementSelector) => {
  let cssText = {}
  let cssMisc = {}
  let system = compose(color, space, layout, typography, border)

  for (let [name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name) || [name]
    for (let cssProp of name) {
      let cssPropValue
      if (cssProp.startsWith('_')) {
        cssProp = cssProp.replace('_', '&:')
        cssPropValue = createCssMisc(value, theme, cssProp)
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        continue
      }
      cssText = Object.assign(cssText, { [cssProp]: value })
    }
  }
  cssText.theme = theme

  let newCss = system(cssText)

  return Object.assign(newCss, cssMisc)
}

const defaultOpts = {
  renderThemeStyles: true,
  system: [color, space, layout, typography, border],
}

const styled = (node, props, opts = defaultOpts) => {
  let previousCssText = ''
  let prevClassName

  const update = ([attributes, theme]) => {
    const cssText = processCss(attributes, theme)

    // skip unnecessary updates
    if (cssText === previousCssText) return
    previousCssText = cssText

    // appends the current styles to the document head
    // see goober documentation for details
    const cn = css(cssText)
    node.classList.add(cn)

    if (prevClassName) node.classList.remove(prevClassName)
    prevClassName = cn
  }

  update(props)

  return { update }
}

export { css, processCss, createCssMisc, styled }
