<script>
  import get from 'lodash/get'
  import {
    Grid,
    Flex,
    Box,
    Heading,
    Text,
  } from '@studiobear/designspek-components'
  import Sidebar from '../Sidebar.svelte'

  export let theme = $$props.theme || {}
  export let user = $$props.user || {}
  export let loading = $$props.loading || false

  $: userInfo = get(user, 'data.me', null)
  $: collection = get(userInfo, 'collections', null)
  $: works = get(collection[0], 'works', null)

  $: primary = theme.colors.primary
  $: secondary = theme.colors.secondary
  $: background = theme.colors.background

  $: h1Style = {
    color: background,
    fontSize: '3em',
    lineHeight: '3em',
    txtAlign: 'center',
    position: 'relative',
    m: 0,
  }
  $: h3Style = {
    color: secondary,
    txtAlign: 'center',
    fontSize: '1.4em',
  }

  let contentGrid = {
    justc: 'center',
    alignc: 'center',
    w: '100%',
    minh: ['20em', '30em', '40em'],
    tempcols: '[first] 1fr [line2] 20rem [end]',
    temprows: [
      '[row1-start] auto [row1-end] auto [row-end]',
      '[row1-start] auto [row1-end] auto [row-end]',
      '[row1-start] auto [row-end]',
      '[row1-start] auto [row-end]',
      '[row1-start] auto [row-end]',
    ],
    gridareas: [
      '"sidebar sidebar" "main main" ',
      '"sidebar sidebar" "main main" ',
      '"main sidebar"',
      '"main sidebar"',
      '"main sidebar"',
    ],
  }

  let workGrid = {
    just: 'center',
    w: '100%',
    tempcols: 'repeat( auto-fit, minmax(15rem, 1fr) )',
  }

  $: content = {
    area: 'main',
    d: 'flex',
    flexdir: 'column',
    textalign: 'center',
    p: '1em 2em 3em',
  }
  $: console.log('LoggedIn: ', user, works)
</script>

<Grid container style={contentGrid}>
  <Flex style={content}>
    <Heading as="h1" style={h1Style}>Y&auml;ger Galerie Collections</Heading>
    {#if !loading && works !== null}
      <Grid container style={workGrid}>
        {#each works as work, i}
          <Flex>
            <Heading as="h3" style={h3Style}>{work.title}</Heading>
          </Flex>
        {/each}
      </Grid>
    {/if}
  </Flex>
  <Sidebar {theme} user={userInfo} />
</Grid>
