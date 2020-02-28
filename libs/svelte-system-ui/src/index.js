import { css } from 'goober'
import {
  compose,
  color,
  space,
  layout,
  border,
  flexbox,
  typography as typographySS,
  grid,
} from 'styled-system'
import { shortHandAttributes } from './constants'
import glob from './glob'
import typography, { fontLink } from './typography'

export const system = compose(
  color,
  space,
  layout,
  border,
  flexbox,
  typographySS,
  grid,
)

const defaultUnits = {
  space: 'px',
  layout: '%',
  grid: 'px',
}
const addUnits = (styles, units = defaultUnits) => {
  // console.log('addUnits:', styles, units)
  let withUnits = {}
  for (let [name, value] of Object.entries(styles)) {
    // console.log('addUnits entries:', name, value)
    if (typeof value === 'object' && value !== null) {
      let withUnitsO = {}
      for (let [nameO, valueO] of Object.entries(value)) {
        // console.log('addUnits object:', nameO, valueO)
        if (
          (nameO.startsWith('margin') || nameO.startsWith('padding')) &&
          typeof valueO === 'number'
        ) {
          Object.assign(withUnitsO, { [nameO]: `${valueO}${units.space}` })
          continue
        }
        if (nameO.startsWith('grid') && typeof valueO === 'number') {
          Object.assign(withUnitsO, { [nameO]: `${valueO}${units.grid}` })
          continue
        }
        Object.assign(withUnitsO, { [nameO]: valueO })
      }
      Object.assign(withUnits, { [name]: withUnitsO })
      continue
    }
    if (
      (name.startsWith('margin') || name.startsWith('padding')) &&
      typeof value === 'number'
    ) {
      Object.assign(withUnits, { [name]: `${value}${units.space}` })
      continue
    }
    if (name.startsWith('grid') && typeof value === 'number') {
      Object.assign(withUnits, { [name]: `${value}${units.grid}` })
      continue
    }
    Object.assign(withUnits, { [name]: value })
  }
  // console.log('addUnits return:', withUnits)
  return withUnits
}

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
      if (cssProp.startsWith('margin') || cssProp.startsWith('padding')) {
        cssPropTmp = { [cssProp]: value }
        cssPropValue = space(cssPropTmp)
        cssPropTmp.theme = theme
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        return cssMisc
      }
      cssMisc = Object.assign(cssMisc, { [cssProp]: value })
    }
  }
  return cssMisc
}

export const processCss = (attributes, theme, pseudoElementSelector) => {
  let cssText = {}
  let cssMisc = {}

  for (let [name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name) || [name]
    console.log('processCss 1', name, value)
    for (let cssProp of name) {
      let cssPropValue
      if (cssProp.startsWith('_')) {
        cssProp = cssProp.replace('_', '&:')
        // console.log('processCss 2', cssProp, value)
        cssPropValue = createCssMisc(value, theme, cssProp)
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        continue
      }
      cssText = Object.assign(cssText, { [cssProp]: value })
    }
  }
  cssText.theme = theme

  let newCss = system(cssText)
  console.log('newCss', newCss, cssMisc)

  return addUnits(Object.assign(newCss, cssMisc))
}

const styled = (node, props) => {
  let previousCssText = ''
  let prevClassName

  const update = ([attributes, theme]) => {
    const cssText = processCss(attributes, theme)
    // console.log('styled.update: ', cssText, theme)
    if (cssText === previousCssText) return
    previousCssText = cssText

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

    let parsedV = value
    parsedV.theme = globStyles

    parsedV = system(parsedV)
    for (let [nameV, valueV] of Object.entries(parsedV)) {
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

const addGlobal = theme => glob(parseGlobal(theme))

export { styled, addGlobal, typography, fontLink }
