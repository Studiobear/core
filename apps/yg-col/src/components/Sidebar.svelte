<script>
  import { theme } from '../theme'
  import { Section, Flex, Box } from '@studiobear/designspek-components'
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

<Section as="nav" style={footer}>
  <Flex style={flex}>
    <Box>Sidebar</Box>
  </Flex>
</Section>
