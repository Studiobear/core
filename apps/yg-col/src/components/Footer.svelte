<script>
  import { theme } from '../theme'
  import { Section, Flex, Box, Text } from '@studiobear/designspek-components'
  /*
  $: primary = $theme.colors.primary
  $: secondary = $theme.colors.secondary
  $: background = $theme.colors.background
*/
  $: footer = { color: $theme.colors.primary }
  $: flex = {
    bg: $theme.colors.secondary,
    justc: 'space-around',
    alignc: 'center',
    minh: '4em',
    pt: '1rem',
  }
</script>

<Section as="nav" style={footer}>
  <Flex style={flex}>
    <Text>
      Y&auml;ger Galerie. &copy; {new Date().getFullYear()}. All rights
      reserved.
    </Text>
  </Flex>
</Section>
