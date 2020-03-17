import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme = {
  title: 'Source Sans Pro',
  baseFontSize: '18px',
  baseLineHeight: 1.5625,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['200', '300', '300i', '600', '900'],
    },
  ],
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 200,
  bodyWeight: 300,
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      color: options.bodyColor,
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      paddingLeft: rhythm(18 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(6 / 16)} solid`,
      borderColor: '#fcea0e',
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        borderLeft: `${rhythm(3 / 16)} solid`,
        borderColor: '#fcea0e',
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
}

export default theme
