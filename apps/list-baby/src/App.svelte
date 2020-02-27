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
  $: background = $theme.colors.background
  $: mainStyle = {
    bg: primary,
  }

  $: gridStyles = {
    textalign: 'center',
    brd: '8px solid',
    brdCol: $theme.colors.text,
  }

  $: headerStyles = {
    color: $theme.colors.primary,
  }

  $: contentStyles = {
    textalign: 'center',
    p: 4,
    maxw: [0, 0, '20em'],
    bg: background,
  }
</script>

<Section {...$$props} as="main" theme={$theme} style={mainStyle}>
  <Grid container style={gridStyles}>
    <Flex />
    <Grid>
      <Box style={contentStyles}>
        <Heading as="h1" style={headerStyles}>Hello {name}!</Heading>
        <p>
          Visit the
          <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
          to learn how to build Svelte apps.
          <button on:click={changeMode}>{mode}</button>
        </p>
      </Box>
    </Grid>
    <Flex />
  </Grid>
</Section>
