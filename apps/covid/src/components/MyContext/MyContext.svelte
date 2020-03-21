<script>
  // import { onMount } from 'svelte'
  import { Flex, Box, Heading, Text } from '@studiobear/designspek-components'
  import GetContextFab from './GetContextFab.svelte'
  import { insertCommas } from '../../libs'
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

  $: overviewBox = {
    flexdir: 'column',
    align: 'center',
    bg: theme.colors.muted,
    mx: 'auto',
    py: '1rem',
    w: '100vw',
  }
  let overviewSingleBox = {
    flexdir: 'column',
    align: 'center',
    w: '100%',
    txtalign: 'center',
    d: 'flex',
    flexdir: 'column',
    alignc: 'stretch',
    my: '0.5rem',
  }
  let overviewMiddleBox = {
    flexdir: 'row',
    width: '100%',
    alignc: 'stretch',
    pb: '1.5rem',
  }
  $: overviewSingleBoxActive = {
    ...overviewSingleBox,
    bg: theme.colors.quaternary,
    pb: '1.5rem',
  }

  $: overviewBottomBox = {
    ...overviewMiddleBox,
    bg: theme.colors.grey,
  }
  $: ovTitle = {
    letterSpacing: '0.25rem',
    fontWeight: 900,
    color: theme.colors.tertiary,
    textTransform: 'uppercase',
  }

  function handleFab(event) {
    alert(event.detail.go)
  }
</script>

<Flex style={overviewBox} {ssr}>
  <Box style={overviewSingleBox} {ssr}>
    <GetContextFab {theme} {ssr} on:message={handleFab} />
    <Heading as="h6" style={ovTitle} {ssr}>Near Me</Heading>
  </Box>
</Flex>
