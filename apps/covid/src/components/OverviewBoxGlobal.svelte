<script>
  // import { onMount } from 'svelte'
  import { Flex, Box, Heading, Text } from '@studiobear/designspek-components'
  export let theme = $$props.theme || {}
  export let active = 0
  export let recovered = 0
  export let deaths = 0
  export let confirmed = 0

  $: overviewBox = {
    flexdir: 'column',
    align: 'center',
    brd: '1px solid',
    brdCol: theme.colors.muted,
  }
  let overviewSingleBox = {
    flexdir: 'column',
    align: 'center',
    w: '100%',
    txtalign: 'center',
    d: 'flex',
    flexdir: 'column',
    alignc: 'stretch',
  }

  let overviewDoubleBox = {
    flexdir: 'row',
    width: '100%',
    alignc: 'stretch',
  }
  $: h6 = {
    py: 0,
  }
</script>

<Flex style={overviewBox}>
  <Box style={overviewSingleBox}>
    <Heading as="h6" style={h6}>Active</Heading>
    <Heading as="h2">{active}</Heading>
  </Box>
  <Flex style={overviewDoubleBox}>
    <Box style={overviewSingleBox}>
      <Heading as="h6">Recoveries</Heading>
      <Heading as="h3">{recovered}</Heading>
    </Box>
    <Box style={overviewSingleBox}>
      <Heading as="h6">Deaths</Heading>
      <Heading as="h3">{deaths}</Heading>
    </Box>
  </Flex>
  <Box style={overviewSingleBox}>
    <Heading as="h6">Confirmed</Heading>
    <Heading as="h3">{confirmed}</Heading>
  </Box>
</Flex>
