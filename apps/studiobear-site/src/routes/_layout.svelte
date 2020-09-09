<script>
  import { onMount } from 'svelte'
  import { addGlobal, styled, removeSSR } from '@studiobear/designspek'
  import { Section, Button, Box } from '@studiobear/designspek-components'

  import { theme } from '../theme'

  import { storeUserPrefs, lfUserPrefs } from '../stores/userPrefs'
  import { Nav, SSR } from '../components'

  if (process.browser) {
    lfUserPrefs
      .ready()
      .then(async () => {
        let keys = await getStorageKeys(lfUserPrefs)
        if (keys.includes('mode')) {
          let mode = await getStorageItem('mode', lfUserPrefs)
          mode === 'light' ? theme.light() : theme.dark()
        } else {
          setStorageItem('mode', 'light', lfUserPrefs)
          theme.light()
        }
        if (keys.includes('location')) {
          let loc = await getStorageItem('location', lfUserPrefs)
          await storeUserPrefs.location(loc)
        }
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  // $: background = $theme.colors.background || '#fff'
  export let segment
  let ssr = true

  $: bodyStyle = {
    bg: $theme.colors.background,
  }

  $: mainStyle = {
    maxWidth: '56rem',
    bg: $theme.colors.background,
    p: ['0rem', '0rem', '1rem', '2rem', '3rem'],
    mx: 'auto',
    pt: '6.25rem',
    width: '100vw',
  }
  $: addGlobal($theme)
  onMount(() => {
    // removeSSR()
    ssr = false
  })
</script>

<Box style={bodyStyle} {ssr}>
  <Nav {segment} {ssr} />
  <Section as="main" style={mainStyle} {ssr}>
    <slot />
  </Section>
</Box>
