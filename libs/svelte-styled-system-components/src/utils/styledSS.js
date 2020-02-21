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

const createCssText = (attributes, theme, pseudoElementSelector) => {
  let cssText = {}
  let cssMisc = {}
  const mediaQueries = []

  let system = compose(color, space, layout, typography, border)
  console.log('createCssText: ', attributes, theme, pseudoElementSelector)
  for (let [name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name.toLowerCase()) || [name]
    console.log('cCT for1: ', name, value)
    for (let cssProp of name) {
      let cssPropValue
      console.log('cCT for2: ', cssProp)
      if (cssProp.startsWith('_')) {
        cssProp = cssProp.replace('_', '&:')
        cssPropValue = createCssText(value, theme, cssProp)
        console.log('cssPropValue: ', cssPropValue)
        cssMisc = Object.assign(cssMisc, { [cssProp]: cssPropValue })
        continue
      }
      cssText = Object.assign(cssText, { [cssProp]: value })
    }
  }
  cssText.theme = theme
  console.log('newCssText: ', cssText, cssMisc)
  let newCss = system(cssText)
  newCss = Object.assign(newCss, cssMisc)
  console.log('newCss: ', newCss)
  return newCss
}

const styled = (node, props) => {
  let previousCssText = ''
  let prevClassName
  console.log('styled: ', previousCssText, node, props)
  const update = ([attributes, theme]) => {
    const cssText = createCssText(attributes, theme)
    console.log('cssText: ', cssText)
    // skip unnecessary updates
    if (cssText === previousCssText) return
    previousCssText = cssText

    // appends the current styles to the document head
    // see goober documentation for details
    const cn = css(cssText)
    node.classList.add(cn)
    console.log('cn: ', prevClassName, cn, node)

    if (prevClassName) node.classList.remove(prevClassName)
    prevClassName = cn
  }

  update(props)

  return { update }
}

export { css, createCssText, styled }
