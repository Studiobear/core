<script>
  import { styled } from '@studiobear/designspek'
  import theme from '../theme'
</script>

<button use:styled={[$$props, $theme]} on:click>
  <slot />
</button>
