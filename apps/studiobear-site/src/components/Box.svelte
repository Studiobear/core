<script>
  import { styled } from "svelte-styled-system";
  import theme from "../theme";

  export let as = 'div';
</script>

{#if !as || as === 'div'} 
  <div use:styled={[$$props, $theme]}>
    <slot></slot>
  </div>
{:else if as === 'nav'} 
<nav use:styled={[$$props, $theme]}>
  <slot></slot>
</nav>
{/if}