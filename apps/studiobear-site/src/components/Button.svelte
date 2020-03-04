<script>
  import { styled } from '@studiobear/svelte-styled-system'
  import theme from '../theme'
</script>

<button use:styled={[$$props, $theme]} on:click>
  <slot />
</button>
