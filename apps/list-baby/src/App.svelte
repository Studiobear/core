<script context="module">
  import { setContext } from 'svelte'
  import { get } from 'svelte/store'
  import { theme } from './theme'

  let mode = 'light'

  export function changeMode() {
    if (mode === 'light') {
      mode = 'dark'
      theme.dark()
    } else {
      mode = 'light'
      theme.light()
    }
  }
</script>

<script>
  import { addGlobal } from 'svelte-system-ui'
  // import { theme } from './theme'
  import {
    Section,
    Grid,
    Flex,
    Box,
    Heading,
  } from 'svelte-system-ui-components'

  import { Header, Footer } from './components/index'
  /*
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
  */

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

  $: headerStyle = {
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
    <Header theme={$theme} />
    <Section as="main">
      <Grid
        container
        style={{ justc: 'center', alignc: 'center', minh: ['20em', '30em', '40em'] }}>
        <Box style={content}>
          <Heading as="h1" style={headerStyle}>Hello {name}!</Heading>
          <p>
            Now using hmr!
            <button on:click={changeMode}>{$theme.mode}</button>
          </p>
        </Box>
      </Grid>
    </Section>
    <Footer />
  </Grid>
</Box>
