<script>
  //import { styled } from 'svelte-styled-system'
  import { styled } from '../utils'
  import theme from '../theme'
  export let as = 'div'
  export let style = {}
  let role
  console.log(theme, style, $$props)
</script>

{#if !as || as === 'div'}
  <div role={$$props.role} use:styled={[style, $theme]}>
    <slot>
      <em>no content was provided</em>
    </slot>
  </div>
{:else if as === 'nav'}
  <nav {...$$props} use:styled={[style, $theme]}>
    <slot>
      <em>no content was provided</em>
    </slot>
  </nav>
{/if}
