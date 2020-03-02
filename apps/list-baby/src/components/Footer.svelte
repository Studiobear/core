<script>
  import { theme } from '../theme'
  import { Section, Flex, Box } from 'svelte-system-ui-components'
  /*
  $: primary = $theme.colors.primary
  $: secondary = $theme.colors.secondary
  $: background = $theme.colors.background
*/
  $: footer = { color: $theme.colors.background }
  $: flex = {
    bg: $theme.colors.secondary,
    justc: 'space-around',
    alignc: 'center',
    minh: '4em',
  }
</script>

<Section as="footer" style={footer}>
  <Flex style={flex}>
    <Box>Footer</Box>
    <Box>Footer</Box>
    <Box>Footer</Box>
  </Flex>
</Section>
