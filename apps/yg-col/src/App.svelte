<script context="module">
  import { setContext } from 'svelte'
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
  import { addGlobal } from '@studiobear/designspek'
  // import { theme } from './theme'
  import {
    Section,
    Grid,
    Flex,
    Box,
    Heading,
    Text,
  } from '@studiobear/designspek-components'

  import { Header, Sidebar, User } from './components/index'

  $: addGlobal($theme)

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
    lineHeight: '1.8em',
    txtalign: 'center',
    position: 'relative',
  }
  $: headerStyle1 = {
    color: '#ddd',
  }

  $: content = {
    textalign: 'center',
    p: '4em',
    mt: '180px',
    minw: ['10em', '15em', '20em'],
    maxw: '100%',
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
          <Heading as="h1" style={headerStyle}>
            To Do? To Remember? To Share?
            <br />
            <span style="font-size: 66px; padding-left: 0.6em;">
              Make it Duly Listed
              <span
                style="font-size: 30px; line-height: 1.8em; position: relative;
                top: -28px;">
                **
              </span>
            </span>
          </Heading>
          <Text style={{ txtalign: 'center', color: $theme.colors.muted }}>
            **Created by an individual who hates lists
          </Text>
        </Box>
      </Grid>
    </Section>
    <Sidebar />
  </Grid>
</Box>
