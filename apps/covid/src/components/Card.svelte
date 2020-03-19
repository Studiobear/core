<script>
  import { Box } from '@studiobear/designspek-components'

  export let style = {}
  export let theme = $$props.theme || { colors: { muted: '#C0D0D1' } }
  let compStyles = {
    mx: '0.5rem',
    my: '0.5rem',
    brd: '1px solid',
    brdCol: theme.colors.muted,
    borderRadius: '0.5rem',
    px: '0.5rem',
    py: '0.75rem',
    ...style,
  }
</script>

<Box {...$$props} style={compStyles}>
  <slot />
</Box>
