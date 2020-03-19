const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export const main = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
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
    text: '#202C33',
    background: '#FFF',
    primary: '#F14A49',
    secondary: '#52C9CB',
    muted: '#C0D0D1',
    highlight: '#FFBC34',
    header: 'rgba(255,255,255,0.8)',
    modes: {
      dark: {
        text: '#EEE',
        background: '#202C33',
        primary: '#F46E6D',
        secondary: '#A8E4E5',
        muted: '#314545',
        highlight: '#FFBC34',
        header: 'rgba(32,44,51,0.8)',
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
      background: 'background',
    },
    h1: {
      ...heading,
      fontSize: 5,
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
  },
  forwardStyleDefault: [
    'txtdeco',
    'textDecoration',
    'textTransform',
    'position',
    'f',
    's',
    'fill',
    'stroke',
    'scrollBehavior',
    'borderSpacing',
  ],
}

export default main
