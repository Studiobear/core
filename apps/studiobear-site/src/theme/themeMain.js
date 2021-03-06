const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export const main = {
  breakpoints: ['320px', '480px', '769px', '1025px', '1281px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 2,
  },
  colors: {
    text: '#000',
    background: '#FFF',
    primary: '#000',
    secondary: '#B61F2A',
    tertiary: '#8F9295',
    quaternary: '#314545',
    muted: '#C0D0D1',
    highlight: '#FFBC34',
    header: 'rgba(255,255,255,0.8)',
    green: '#7ad721',
    purple: '#ac80e7',
    yellow: '#ffbc34',
    blue: '#1da4bf',
    red: '#b53837',
    grey: '#8E9999',
    subtle: '#C0D0D1',
    lightRed: '#f9b7b6',
    lightYellow: '#ffe4ae',
    lightGreen: '#caefa6',
    lightBlue: '#a9f1ff',
    lightPurple: '#c8aaef',
    modes: {
      dark: {
        text: '#EEE',
        background: '#000',
        primary: '#FFF',
        secondary: '#8F9295',
        tertiary: '#B61F2A',
        quaternary: '#507777',
        muted: '#314545',
        highlight: '#FFBC34',
        header: 'rgba(32,44,51,0.8)',
        green: '#caefa6',
        purple: '#c8aaef',
        yellow: '#ffe4ae',
        blue: '#a9f1ff',
        red: '#f9b7b6',
        grey: '#050707',
        subtle: '#585F5F',
        lightRed: '#b53837',
        lightYellow: '#cf7b34',
        lightGreen: '#6c934e',
        lightBlue: '#408aa6',
        lightPurple: '#685aae',
        antialias: true,
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      boxSizing: 'border-box',
    },
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      antialias: true,
      reset: true,
      m: 0,
      bg: 'background',
      bgCol: 'background',
      w: '100%',
    },
    h1: {
      ...heading,
      fontSize: [3, 3.5, 4, 4.5, 5],
      py: '0.5rem',
      color: 'primary',
    },
    h2: {
      ...heading,
      fontSize: 4,
      color: 'secondary',
    },
    h3: {
      ...heading,
      fontSize: 3,
      fontWeight: 400,
      color: 'secondary',
      my: 0.25,
    },
    h4: {
      ...heading,
      fontSize: 2,
      fontWeight: 700,
      color: 'text',
      my: 0.2,
    },
    h5: {
      ...heading,
      fontSize: 1,
      fontWeight: 700,
      color: 'primary',
      my: 0.15,
    },
    h6: {
      ...heading,
      fontSize: 0,
      fontWeight: 900,
      textTransform: 'uppercase',
      color: 'secondary',
      my: 0.1,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      fontFamily: 'body',
      brd: '1px solid',
      brdCol: 'muted',
      color: 'text',
    },
    th: {
      textAlign: 'left',
      bb: '1px solid',
      brdCol: 'muted',
      fontFamily: 'body',
      color: 'text',
    },
    tr: {
      bb: '1px solid',
      brdCol: 'muted',
    },
    td: {
      textAlign: 'left',
      br: '1px solid',
      brdCol: 'muted',
      fontFamily: 'body',
      color: 'text',
    },
    img: {
      maxWidth: '100%',
    },
    li: {
      color: 'text',
    },
  },
}

export default main
