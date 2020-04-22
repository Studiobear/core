<script>
  import {
    Grid,
    Flex,
    Box,
    Heading,
    Text,
  } from '@studiobear/designspek-components'

  import LoginForm from './LoginForm.svelte'

  export let theme = $$props.theme || {}

  $: primary = theme.colors.primary
  $: secondary = theme.colors.secondary
  $: background = theme.colors.background

  $: h1Style = {
    color: primary,
    lineHeight: '1.8em',
    txtAlign: 'center',
    position: 'relative',
    m: 0,
  }
  $: h2Style = {
    color: secondary,
    fontSize: '2em',
    lineHeight: '1.8em',
    txtAlign: 'center',
    position: 'relative',
    m: 0,
  }

  let contentGrid = {
    justc: 'center',
    alignc: 'center',
    minh: ['20em', '30em', '40em'],
  }

  $: content = {
    d: 'flex',
    flexdir: 'column',
    textalign: 'center',
    p: '1em 2em 3em',
    mt: '16rem',
    minw: ['10em', '15em', '20em'],
    maxw: '100%',
    bg: background,
  }
</script>

<Grid container style={contentGrid}>
  <Flex style={content}>
    <Heading as="h1" style={h1Style}>Y&auml;ger Galerie Collections</Heading>
    <LoginForm {theme} />
  </Flex>
</Grid>
