import { css } from 'goober'
import {
  compose,
  color,
  space,
  layout,
  typography,
  border,
} from 'styled-system'
import { shortHandAttributes } from './constants'
import glob from './glob'

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
const system = compose(color, space, layout, typography, border)
const processCss = (attributes, theme, pseudoElementSelector) => {
  let cssText = {}
  let cssMisc = {}

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

const styled = (node, props) => {
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

const parseGlobal = globStyles => {
  let globCss = ''
  let parseTheme = globStyles.styles

  for (let [name, value] of Object.entries(parseTheme)) {
    if (name !== 'p') {
      name = shortHandAttributes.get(name) || name
    }
    globCss += `${name}{`
    console.log('globCss 1: ', name, value)
    let parsedV = value
    parsedV.theme = globStyles
    console.log('parsedV: ', parsedV)
    parsedV = system(parsedV)
    for (let [nameV, valueV] of Object.entries(parsedV)) {
      console.log(
        'globCss 2: ',
        nameV,
        valueV,
        /%/g.test(valueV),
        !(typeof valueV === 'string' && valueV.endsWith('px')),
      )
      nameV = nameV.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
      valueV = valueV === 'text' ? '"text"' : valueV
      valueV =
        nameV === 'font-size' && !/%/g.test(valueV) ? `${valueV}px` : valueV
      valueV = nameV === 'line-height' ? `${valueV}rem` : valueV

      valueV =
        (nameV.startsWith('margin') &&
          !(typeof valueV === 'string' && valueV.endsWith('px'))) ||
        nameV.startsWith('padding')
          ? `${valueV}px`
          : valueV
      globCss += ` ${nameV}: ${valueV}; `
    }
    globCss += '} '
  }

  return globCss
}

const addGlobal = theme => {
  console.log('addGlobal: ', theme)

  const globTheme = parseGlobal(theme)
  console.log('globTheme: ', globTheme)
  return glob(globTheme)
}

export { css, styled, addGlobal }
