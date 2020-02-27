<script>
  import { Section, Grid, Flex, Box } from 'svelte-system-ui-components'
  export let name = 'world'

  const gridStyles = {
    textalign: 'center',
    p: 4,
    maxw: [0, 0, '20em'],
  }
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<Section as="main">
  <Grid container style={gridStyles}>
    <Flex />
    <Grid>
      <Box>
        <h1>Hello {name}!</h1>
        <p>
          Visit the
          <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
          to learn how to build Svelte apps.
        </p>
      </Box>
    </Grid>
    <Flex />
  </Grid>
</Section>
