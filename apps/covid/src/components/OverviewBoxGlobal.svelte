<script>
  // import { onMount } from 'svelte'
  import { Flex, Box, Heading, Text } from '@studiobear/designspek-components'
  import { insertCommas } from '../libs'
  export let theme = $$props.theme || {}
  export let ssr = $$props.ssr || {}
  export let overview
  $: active = overview.active || 0
  $: recovered = overview.recovered || 0
  $: confirmed = overview.confirmed || 0
  $: deaths = overview.deaths || 0
  $: fatalityRate = overview.fatalityRate || 0
  $: recoveryRate = overview.recoveryRate || 0
  $: updated = overview.updated

  // $: console.log('ov', overview, insertCommas, insertCommas(100000))

  $: overviewBox = {
    w: ['100%', '100%', '100%', '100%', '100%'],
    flexdir: 'column',
    align: 'center',
    brd: '1px solid',
    brdCol: theme.colors.muted,
    mx: 'auto',
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

  $: overviewSingleBoxActive = {
    ...overviewSingleBox,
    bg: theme.colors.tertiary,
    pb: '1.5rem',
  }

  let overviewMiddleBox = {
    flexdir: 'row',
    width: '100%',
    alignc: 'stretch',
    pb: '1.5rem',
  }
  $: overviewBottomBox = {
    flexdir: 'row',
    width: '100%',
    alignc: 'stretch',
    pb: '1.5rem',
    bg: theme.colors.muted,
  }
  $: ovTitle = {
    letterSpacing: '0.25rem',
    fontWeight: 900,
    color: theme.colors.tertiary,
    textTransform: 'uppercase',
  }
  $: h6 = {
    py: 0,
  }
  $: activeh2 = {
    fontSize: '4rem',
    color: theme.colors.background,
    my: '0.5rem',
  }
  $: middleh6 = {
    color: theme.colors.tertiary,
  }
  $: recoverh3 = {
    color: theme.colors.green,
  }
  $: confirmh3 = {
    color: theme.colors.blue,
  }
  $: deathh3 = {
    color: theme.colors.purple,
  }
  $: ovUpdated = {
    fontSize: '0.8rem',
    color: theme.colors.tertiary,
    txtTran: 'uppercase',
    txtAlign: 'center',
    mb: 0,
    mt: '0.25rem',
    px: '1rem',
  }
  $: btmh6 = {
    color: theme.colors.tertiary,
  }
  $: btmh4 = {
    color: theme.colors.text,
    fontSize: '1.5rem',
  }
</script>

<Flex style={overviewBox} {ssr}>
  <Box style={overviewSingleBox} {ssr}>
    <Heading as="h6" style={ovTitle} {ssr}>Global Cases</Heading>
  </Box>
  <Box style={overviewSingleBoxActive} {ssr}>
    <Heading as="h6" style={h6} {ssr}>Active</Heading>
    <Heading as="h2" style={activeh2} {ssr}>{insertCommas(active)}</Heading>
  </Box>
  <Flex style={overviewMiddleBox} {ssr}>
    <Box style={overviewSingleBox} {ssr}>
      <Heading as="h6" style={middleh6} {ssr}>Recoveries</Heading>
      <Heading as="h3" style={recoverh3} {ssr}>
        {insertCommas(recovered)}
      </Heading>
    </Box>
    <Box style={overviewSingleBox} {ssr}>
      <Heading as="h6" style={middleh6} {ssr}>Confirmed</Heading>
      <Heading as="h3" style={confirmh3} {ssr}>
        {insertCommas(confirmed)}
      </Heading>
    </Box>
    <Box style={overviewSingleBox} {ssr}>
      <Heading as="h6" style={middleh6} {ssr}>Deaths</Heading>
      <Heading as="h3" style={deathh3} {ssr}>{insertCommas(deaths)}</Heading>
    </Box>
  </Flex>
  <Flex style={overviewBottomBox} {ssr}>
    <Box style={overviewSingleBox} {ssr}>
      <Heading as="h6" style={btmh6} {ssr}>Recovery Rate</Heading>
      <Heading as="h4" style={btmh4} {ssr}>{recoveryRate.toFixed(2)}%</Heading>
    </Box>
    <Box style={overviewSingleBox} {ssr}>
      <Heading as="h6" style={btmh6} {ssr}>Fatality Rate</Heading>
      <Heading as="h4" style={btmh4} {ssr}>{fatalityRate.toFixed(2)}%</Heading>
    </Box>
  </Flex>

</Flex>
<Text style={ovUpdated} {ssr}>Last updated: {updated}</Text>
