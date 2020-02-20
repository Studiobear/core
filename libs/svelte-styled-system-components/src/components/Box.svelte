<script>
  import { styled } from 'svelte-styled-system'
  import theme from '../theme'

  export let as = 'div'
</script>

{#if !as || as === 'div'}
  <div use:styled={[$$props, $theme]}>
    <slot>
      <em>no content was provided</em>
    </slot>
  </div>
{:else if as === 'nav'}
  <nav use:styled={[$$props, $theme]}>
    <slot>
      <em>no content was provided</em>
    </slot>
  </nav>
{/if}
