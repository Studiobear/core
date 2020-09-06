<script context="module">
  export const preload = async () => {
    const prestyled = { primary: '#446' }
    return { prestyled }
  }
</script>

<script>
  import { styled } from '@studiobear/designspek'
  import { Button } from '@studiobear/designspek-components'
  import { theme } from '../theme'

  import { Nav, Box } from '../components'

  export let segment
  export let mode = 'basic'
  export let prestyled

  $: ssrStyle = prestyled ? prestyled : { primary: '#889' }
  $: console.log('ssrStyle: ', ssrStyle)
</script>

<Nav {segment} />

<main use:styled={[$$props, $theme]}>
  <Button
    style={{ bg: ssrStyle.primary }}
    p="space.xs"
    color={'colors.secondary'}
    on:click={() => {
      mode === 'basic' ? theme.dark() : theme.reset()
      return (mode = mode === 'basic' ? 'dark' : 'basic')
    }}>
    click to invert me!
  </Button>
  <slot {ssrStyle} />
</main>
