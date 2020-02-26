<script>
  import Box from './Box'

  export let style
  export let colgap = ''
  export let rowgap = ''
  export let gridgap = '5px 10px'
  export const container = false
  let d
  if ($$props.container) d = { d: 'grid' }
  if (typeof $$props.container === 'string') d = { d: $$props.container }
  if (typeof colngap === ('number' || 'string')) gridgap = ''
  if (typeof rowgap === ('number' || 'string')) gridgap = ''
  let compStyles = {
    colgap,
    rowgap,
    gridgap,
    ...d,
    ...style,
  }
  console.log('Grid', d, compStyles, $$props)
</script>

<Box {...$$props} style={compStyles}>
  <slot />
</Box>
