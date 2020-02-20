<script>
  import { styled } from 'svelte-styled-system'
  import theme from '../theme'

  export let as = 'p'
</script>

{#if !as || as === 'p'}
  <p use:styled={[$$props, $theme]}>
    <slot />
  </p>
{/if}
