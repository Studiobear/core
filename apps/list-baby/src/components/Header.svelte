<script>
  import { onMount } from 'svelte'
  import theme from '../theme'
  import {
    Section,
    Flex,
    Box,
    Heading,
  } from '@studiobear/svelte-system-ui-components'
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
  /*
  $: primary = $theme.colors.primary
  $: secondary = $theme.colors.secondary
  $: background = $theme.colors.background
*/
  //$: heading = $$props.theme.colors.heading
  //$: secondary = $$props.theme.colors.secondary
  $: heading = $theme.colors.heading
  $: secondary = $theme.colors.secondary
  $: header = { color: heading, bg: secondary }
  let flex = {
    justc: 'space-between',
    alignc: 'center',
  }
  let nav = {
    justc: 'space-between',
    alignc: 'center',
    pr: 4,
    direction: 'row',
  }
  let brand = {
    pl: 4,
  }
  console.log('Header props: ', $$props, $theme)
  $: mode = $theme.mode
</script>

<Section as="header" style={header}>
  <Flex style={flex}>
    <Box>
      <Heading as="h1" style={brand}>Duly Listed</Heading>
    </Box>
    <Section as="nav">
      <Flex style={nav} />
      <a href="/">Home</a>
      <button on:click={mode === 'light' ? theme.dark() : theme.light()}>
        {mode}
      </button>
      <slot />
      <Flex style={flex} />
    </Section>
  </Flex>
</Section>
