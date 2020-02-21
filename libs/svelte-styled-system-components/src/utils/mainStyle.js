import { themeGet, css } from './styled'
import { basic } from '../theme'

export default basic => {
  console.log('mainStyle: ', basic, themeGet(basic, 'styles'))
  return css`
    ${themeGet(basic, 'styles')}
  `
}
