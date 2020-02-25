<script>
  import { styled } from 'svelte-system-ui'
  import theme from '../theme'
  import Box from './Box'

  export let style
  let compStyles = {
    d: 'flex',
    ...style,
  }
  console.log('Flex', compStyles, $$props)
</script>

<Box {...$$props} style={compStyles}>
  <slot />
</Box>
