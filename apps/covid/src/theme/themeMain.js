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
    modes: {
      dark: {
        text: '#EEE',
        background: '#202C33',
        primary: '#F46E6D',
        secondary: '#A8E4E5',
        muted: '#314545',
        highlight: '#FFBC34',
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
    body: {
      antialias: true,
      m: 0,
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
    },
    h4: {
      ...heading,
      fontSize: 2,
      fontWeight: 700,
      color: 'text',
    },
    h5: {
      ...heading,
      fontSize: 1,
      fontWeight: 700,
      color: 'primary',
    },
    h6: {
      ...heading,
      fontSize: 0,
      fontWeight: 900,
      textTransform: 'uppercase',
      color: 'secondary',
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
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
      fontFamily: 'body',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
      fontFamily: 'body',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default main
