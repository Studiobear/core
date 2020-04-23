<script>
  import { Box, Heading } from '@studiobear/designspek-components'
  import Crest from './Crest.svelte'
  export let theme = $$props.theme || { colors: { primary: '#333' } }

  let loadContainer = {
    size: '4rem',
    m: '0 auto',
    pos: 'relative',
    zIndex: 1,
    t: 0,
  }
  let icon = {
    w: '3rem',
    h: 'auto',
    pos: 'absolute',
    zIndex: 15,
    t: '0.5rem',
    l: '0.5rem',
  }
  $: loadBckgrnd = {
    m: 0,
    p: 0,
    pos: 'relative',
    zIndex: 10,
    t: 0,
    size: '4rem',
    borderRadius: '2rem',
    brd: '1px solid',
    brdCol: 'transparent',
    lineHeight: '0rem',
    d: 'inline-flex',
    align: 'baseline',
    justc: 'center',
    animation: 'colorshift 2s ease-in 0s alternate infinite',
    _keyframesColorshift: {
      from: {
        background: theme.colors.secondary,
      },
      finish: {
        background: theme.colors.secondary,
      },
    },
  }
  $: h6 = {
    color: theme.colors.background,
    txtTran: 'uppercase',
    txtAlign: 'center',
  }
  // console.log('Loading: ', icon)
</script>

<Box style={loadContainer}>
  <Box {theme} style={loadBckgrnd} />
  <Crest style={icon} />
  <Heading as="h6" style={h6}>Loading</Heading>
</Box>
