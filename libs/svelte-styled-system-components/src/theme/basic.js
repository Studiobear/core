const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export const basic = {
  scale: [0.25, 0.5, 0.75, 1, 1.5, 2, 4, 8],
  colors: {
    text: '#666',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 5,
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
      color: 'text',
    },
    h4: {
      ...heading,
      fontSize: 2,
      color: '#ddd',
    },
    h5: {
      ...heading,
      fontSize: 1,
      color: 'text',
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
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
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

basic.space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export default basic
