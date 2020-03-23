<script>
  import { createEventDispatcher } from 'svelte'
  import { fade } from 'svelte/transition'
  import { styled } from '@studiobear/designspek'
  import { Flex } from '@studiobear/designspek-components'
  import Overlay from './Overlay.svelte'
  export let style = $$props.style || {}
  export let theme = $$props.theme || { colors: { background: '#fff' } }
  $: modal = {
    bg: theme.colors.background,
    mx: 'auto',
    my: '1em',
    p: '0.5em',
    boxShadow: '0 3px 10px #555',
    zIndex: 20,
    minh: '10rem',
    maxh: '20rem',
    maxw: '60vw',
    flexdir: 'column',
    align: 'center',
    justc: 'center',
    ...style,
  }

  export let show = false
  const dispatch = createEventDispatcher()
  function handleModal(e) {
    if ('close' in e.target.dataset) show = false
    dispatch('message', {
      close: false,
    })
  }
  function handleOverlay(event) {
    show = event.detail.close
  }
</script>

<Overlay {theme} bind:show on:message={handleOverlay}>
  <Flex {theme} style={modal}>
    <slot />
  </Flex>
</Overlay>
