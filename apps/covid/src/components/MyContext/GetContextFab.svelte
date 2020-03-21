<script>
  import { createEventDispatcher } from 'svelte'
  import { styled } from '@studiobear/designspek'
  import { Icon } from '../index'
  export let theme = $$props.theme || {}
  export let ssr = $$props.ssr || {}
  $: nearMe = styled(
    {
      size: '4rem',
      borderRadius: '2rem',
      brd: '1px solid',
      brdCol: 'transparent',
      bg: 'rgba(255,255,255,.3)',
      color: theme.colors.background,
      pt: '5px',
      txtTran: 'uppercase',
      txtAlign: 'center',
      lineHeight: '0rem',
      _active: {
        bg: 'rgba(80,119,119,.6)',
      },
      _hover: {
        color: theme.colors.subtle,
      },
    },
    theme,
    ssr,
  )
  let icon = {
    w: '3rem',
    h: 'auto',
  }

  const dispatch = createEventDispatcher()

  function findNearMe() {
    dispatch('message', {
      go: true,
    })
  }
</script>

<button on:click={findNearMe} class={nearMe}>
  <Icon name="virus-3" style={icon} fill={theme.colors.primary} {ssr} />
</button>
