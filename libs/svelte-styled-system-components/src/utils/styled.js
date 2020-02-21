import { css } from 'goober'
import dlv from 'dlv'
import { shortHandAttributes } from './constants'

const themeGet = (theme, pathOrValue) =>
  pathOrValue ? dlv(theme, pathOrValue, pathOrValue) : pathOrValue

const createCssText = (attributes, theme, pseudoElementSelector) => {
  let cssText = ''
  const mediaQueries = []
  console.log('createCssText: ', attributes, theme, pseudoElementSelector)
  for (let [name, value] of Object.entries(attributes)) {
    name = shortHandAttributes.get(name.toLowerCase()) || [name]
    console.log('cCT for1: ', name)
    for (let cssProp of name) {
      console.log('cCT for2: ', cssProp)
      if (cssProp.startsWith('_')) {
        cssProp = cssProp.replace('_', '&:')
        cssText += `${cssProp} { ${createCssText(value, theme, cssProp)} }`
        continue
      }

      // unresponsive definitions
      if (!Array.isArray(value)) {
        cssText += `${cssProp}:${themeGet(theme, value)};`
        continue
      }

      // responsive definitions
      cssText += `${cssProp}:${themeGet(theme, value[0])};`
      if (value.length > 1) {
        for (let i = 0; i < value.length; i++) {
          if (!mediaQueries[i]) {
            // if a pseudoElementSelector like &:after is present
            // we need to wrap the content in it
            mediaQueries[i] = pseudoElementSelector
              ? `${pseudoElementSelector} { `
              : ''
          }

          mediaQueries[i] += `${cssProp}:${themeGet(theme, value[i])};`
          if (pseudoElementSelector) mediaQueries[i] += '}'
        }
      }
    }
  }

  // add media queries per breakpoint
  const { breakpoints = [] } = theme
  for (let i = 0; i < breakpoints.length; i++)
    if (mediaQueries[i])
      cssText += `\n@media (min-width: ${breakpoints[i]}) {${mediaQueries[i]}}`
  return cssText
}

const styled = (node, props) => {
  let previousCssText = ''
  let prevClassName
  console.log('styled: ', node, props)
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
    console.log('cn: ', cn, node)

    if (prevClassName) node.classList.remove(prevClassName)
    prevClassName = cn
  }

  update(props)

  return { update }
}

export { css, createCssText, themeGet, styled }
