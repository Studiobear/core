<script>
  import { addGlobal } from 'svelte-system-ui'
  import { theme } from './theme'
  import {
    Section,
    Grid,
    Flex,
    Box,
    Heading,
  } from 'svelte-system-ui-components'

  let mode = 'light'

  function changeMode() {
    if (mode === 'light') {
      mode = 'dark'
      theme.dark()
    } else {
      mode = 'light'
      theme.light()
    }
    console.log('changeMode: ', mode, $theme)
  }

  addGlobal($theme)

  export let name = 'world'

  $: primary = $theme.colors.primary
  $: secondary = $theme.colors.secondary
  $: background = $theme.colors.background
  $: main = {
    bg: background,
  }

  $: grid = {
    textalign: 'center',
  }

  $: header = {
    color: background,
  }

  $: content = {
    textalign: 'center',
    p: 4,
    maxw: ['20em', '30em', '40em'],
    bg: primary,
  }
</script>

<Box {...$$props} theme={$theme} style={main}>
  <Grid container gridgap={0} style={grid}>
    <Section as="header">
      <Flex
        style={{ bg: 'secondary', justc: 'space-between', alignc: 'center', minh: '4em' }}>
        <Box>Header</Box>
        <Section as="nav">
          <a href="/">Home</a>
        </Section>
      </Flex>
    </Section>
    <Section as="main">
      <Grid
        container
        style={{ justc: 'center', alignc: 'center', minh: ['20em', '30em', '40em'] }}>
        <Box style={content}>
          <Heading as="h1" style={header}>Hello {name}!</Heading>
          <p>
            Now using hmr!
            <button on:click={changeMode}>{mode}</button>
          </p>
        </Box>
      </Grid>
    </Section>
    <Section as="footer">
      <Flex
        style={{ bg: 'secondary', justc: 'space-around', alignc: 'center', minh: '4em' }}>
        <Box>Footer</Box>
        <Box>Footer</Box>
        <Box>Footer</Box>
      </Flex>
    </Section>
  </Grid>
</Box>
