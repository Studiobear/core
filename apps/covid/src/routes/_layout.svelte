<script>
  import { onMount } from 'svelte'
  import { addGlobal, styled, removeSSR } from '@studiobear/designspek'
  import { theme } from '../theme'

  import { Section, Button, Box } from '@studiobear/designspek-components'
  import { Nav, SSR } from '../components'

  // $: background = $theme.colors.background || '#fff'
  export let segment
  let ssr = true
  $: bodyStyle = {
    bg: $theme.colors.background,
  }

  $: mainStyle = {
    maxWidth: '56rem',
    bg: $theme.colors.background,
    p: '3rem',
    mx: 'auto',
    pt: '6.25rem',
  }
  $: addGlobal($theme)
  onMount(() => {
    removeSSR()
    ssr = false
  })
</script>

<style>
  :global(html) {
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  :global(body) {
    margin: 0;
  }
</style>

<svelte:options immutable={true} />
<svelte:head>
  <link href="index.css" rel="stylesheet" type="text/css" />
</svelte:head>

<Box style={bodyStyle} {ssr}>
  <Nav {segment} {ssr} />
  <Section as="main" style={mainStyle} {ssr}>
    <slot {ssr} />
  </Section>
</Box>

<SSR theme={$theme} active={ssr} />
