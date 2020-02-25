<script>
  import Box from './Box'

  export let style
  export const columnGap = [1, 2, 3]
  export const rowGap = [1, 2, 3]
  export const container = false
  let d
  if ($$props.container) d = { d: 'grid' }
  if (typeof $$props.container === 'string') d = { d: $$props.container }
  let compStyles = {
    columnGap,
    rowGap,
    ...d,
    ...style,
  }
  console.log('Grid', d, compStyles, $$props)
</script>

<Box {...$$props} style={compStyles}>
  <slot />
</Box>
