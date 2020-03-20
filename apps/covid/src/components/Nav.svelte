<script>
  import { slide, fade, fly } from 'svelte/transition'
  import { styled } from '@studiobear/designspek'
  import {
    Section,
    Flex,
    Link,
    Heading,
  } from '@studiobear/designspek-components'
  import Icon from './Icon.svelte'
  import { theme } from '../theme'
  export let segment
  export let ssr

  import Logo from './Logo.svelte'
  import SSR from './styleSSR.svelte'

  let menuVisible = false
  let toTopVisible = true
  let y = 0
  let topOffset = 120

  $: toTopVisible = y > topOffset ? true : false

  $: headStyle = styled(
    {
      pos: 'fixed',
      t: 0,
      w: '100%',
      zIndex: 100,
      bg: $theme.colors.header,
      fontWeight: 300,
      p: '0',
      maxw: '100vw',
    },
    $theme,
  )
  $: flexStyle = {
    justc: 'space-between',
    align: 'stretch',
    px: '.25rem',
    py: '.25rem',
    theme: $theme,
  }
  $: navStyle = styled(
    {
      pos: 'fixed',
      t: 0,
      r: 0,
      w: '250px',
      h: '100vh',
      d: 'flex',
      flexdir: 'column',
      justc: 'stretch',
      align: 'stretch',
      px: '.25rem',
      py: '.25rem',
      bg: $theme.colors.muted,
    },
    $theme,
  )
  $: flexNavStyle = {
    direction: 'column',
    justc: 'center',
    alignC: 'center',
    theme: $theme,
  }
  $: brandStyle = {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 900,
    width: '100%',
    my: '.4rem',
    fontSize: ['2em', '2em', '2.2em', '2.4em', '2.8em', '3em'],
    theme: $theme,
  }
  $: brandLinkStyle = {
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: 900,
    theme: $theme,
  }
  $: menuLinkStyle = {
    color: $theme.colors.tertiary,
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: '1.4rem',
    px: '1rem',
    py: '.25rem',
    _hover: {
      bg: $theme.colors.secondary,
      color: $theme.colors.background,
    },
  }

  $: menuLinkSelected = {
    ...menuLinkStyle,
    color: $theme.colors.primary,
    _hover: {
      bg: $theme.colors.primary,
      color: $theme.colors.background,
    },
  }

  $: homeLink = segment === undefined ? menuLinkSelected : menuLinkStyle
  $: statsLink = segment === 'stats' ? menuLinkSelected : menuLinkStyle
  $: aboutLink = segment === 'about' ? menuLinkSelected : menuLinkStyle
  $: whyLink = segment === 'why' ? menuLinkSelected : menuLinkStyle

  $: title = segment === undefined ? 'Keep Informed' : segment

  $: navBttn = styled(
    {
      d: 'block',
      w: '40px',
      h: '30px',
      border: '2px solid',
      borderColor: $theme.colors.tertiary,
      pt: '5px',
      mt: '12px',
      mr: '12px',
      borderRadius: '5px',
    },
    $theme,
  )
  $: navBttnSpan = styled(
    {
      d: 'block',
      w: '100%',
      h: '2px',
      mb: '3px',
      bg: $theme.colors.tertiary,
    },
    $theme,
  )
  $: navBttnSpanHidden = styled(
    {
      pos: 'absolute',
      l: '-1000px',
      t: 'auto',
      w: '1px',
      h: '1px',
      m: 0,
      overflow: 'hidden',
    },
    $theme,
  )
  $: navClose = styled(
    {
      fontSize: '2rem',
      fontWeight: 700,
      pos: 'relative',
      t: '-13px',
    },
    $theme,
  )
  $: toTop = styled(
    {
      pos: 'fixed',
      b: '20px',
      r: '20px',
      size: '50px',
      borderRadius: '25px',
      brdCol: 'none',
      bg: 'rgba(0,0,0,.6)',
      color: $theme.colors.background,
      pt: '5px',
      mt: '12px',
      mr: '12px',
      txtTran: 'uppercase',
      txtAlign: 'center',
      lineHeight: '0rem',
    },
    $theme,
  )
  $: toTopCaret = styled(
    {
      fontSize: '2rem',
      fontWeight: 700,
      pos: 'relative',
      t: '-2px',
    },
    $theme,
  )
  $: modeIcon = {
    size: '1.25rem',
    color: $theme.colors.tertiary,
    pt: '.5rem',
  }
</script>

<svelte:head>
  <title>PSA Covid-19: {title}</title>
</svelte:head>
<svelte:window bind:scrollY={y} />
<nav class={headStyle} transition:slide={{ delay: 80, duration: 600 }}>
  <Flex style={flexNavStyle} {ssr}>
    <Flex style={flexStyle} {ssr}>
      <Heading as="h1" style={brandStyle} {ssr}>
        <Link href="." style={brandLinkStyle} {ssr}>PSA: COVID-19</Link>
      </Heading>
      <button
        class={navBttn}
        on:click={() => (menuVisible = !menuVisible)}
        {ssr}>
        <span class={navBttnSpan} />
        <span class={navBttnSpan} />
        <span class={navBttnSpan} />
        <span class={navBttnSpanHidden}>Menu</span>
      </button>
    </Flex>
    {#if menuVisible}
      <div class={navStyle} transition:fly={{ x: 250, opacity: 1 }}>
        <Flex
          style={{ flexdir: 'row-reverse', justc: 'space-between', px: '0.5rem' }}>
          <button class={navBttn} on:click={() => (menuVisible = !menuVisible)}>
            <span class={navClose}>&rtri;</span>
            <span class={navBttnSpanHidden}>Menu Close</span>
          </button>
          <button
            on:click={() => ($theme.mode === 'light' ? theme.dark() : theme.light())}>
            {#if $theme.mode === 'light'}
              <Icon name="virus-2" style={modeIcon} />
            {:else}
              <Icon name="virus-1" style={modeIcon} />
            {/if}
          </button>
        </Flex>
        <Flex style={{ flexdir: 'column', py: '1rem' }}>
          <Link
            href="."
            style={homeLink}
            on:click={() => (menuVisible = !menuVisible)}>
            home
          </Link>
          <Link
            href="stats"
            style={statsLink}
            on:click={() => (menuVisible = !menuVisible)}>
            stats
          </Link>
          <Link
            href="why"
            style={whyLink}
            on:click={() => (menuVisible = !menuVisible)}>
            why
          </Link>
          <Link
            href="about"
            style={aboutLink}
            on:click={() => (menuVisible = !menuVisible)}>
            about
          </Link>
        </Flex>
      </div>
    {/if}
  </Flex>
</nav>

{#if toTopVisible}
  <button
    on:click={() => window.scroll({ top: 0, left: 0, behaviour: 'smooth' })}
    transition:fade={{ delay: 50 }}
    class={toTop}>
    <span class={toTopCaret}>&xwedge;</span>
    <span class={navBttnSpanHidden}>To Top</span>
  </button>
{/if}

<SSR theme={$theme} />
