<script>
  import { theme } from '../theme'
  import { Section, Flex, Box } from '@studiobear/designspek-components'
  /*
  $: primary = $theme.colors.primary
  $: secondary = $theme.colors.secondary
  $: background = $theme.colors.background
*/
  $: footer = {
    color: $theme.colors.background,
    area: 'sidebar',
    d: 'flex',
    flexdir: 'column',
    justc: 'center',
    align: 'stretch',
    bl: '1px solid',
    brdCol: $theme.colors.secondary,
    mt: '4rem',
    px: '2.5rem',
  }
  $: flex = {
    justc: 'flex-end',
    align: 'stretch',
  }
</script>

<Section as="nav" style={footer}>
  <Flex style={flex}>
    <Box>Sidebar</Box>
  </Flex>
</Section>
