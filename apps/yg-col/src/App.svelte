<script>
  import { addGlobal } from '@studiobear/designspek'
  import { theme } from './theme'
  import { Section, Grid, Box } from '@studiobear/designspek-components'

  import { Header, Footer, Login } from './components/index'

  $: addGlobal($theme)

  $: primary = $theme.colors.primary
  $: secondary = $theme.colors.secondary
  $: background = $theme.colors.background
  $: main = {
    bg: primary,
  }

  $: grid = {
    textalign: 'center',
    pb: '4rem',
  }
</script>

<Box style={main}>
  <Grid container gridgap={0} style={grid}>
    <Header theme={$theme} />
    <Section as="main">
      <Login theme={$theme} />
    </Section>
  </Grid>
  <Footer />
</Box>
