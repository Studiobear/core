<script>
  //import { styled } from 'svelte-styled-system'
  import { styled } from 'svelte-system-ui'
  import theme from '../theme'
  export let as = 'div'
  export let style = {}
  let role
  // console.log('Box', theme, style, $$props)
</script>

{#if !as || as === 'div'}
  <div use:styled={[style, $theme]}>
    <slot>
      <em>no content was provided</em>
    </slot>
  </div>
{:else if as === 'nav'}
  <nav role={$$props.role} use:styled={[style, $theme]}>
    <slot>
      <em>no content was provided</em>
    </slot>
  </nav>
{/if}
