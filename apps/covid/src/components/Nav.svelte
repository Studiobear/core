<script>
  import { slide } from 'svelte/transition'
  import { styled } from '@studiobear/designspek'
  import {
    Section,
    Flex,
    Link,
    Heading,
  } from '@studiobear/designspek-components'
  export let segment
  export let theme = $$props.theme || {}
  import Logo from './Logo.svelte'

  let menuVisible = true
  let menu
  let y = 0
  let lastY = 0
  let offset = 60
  let tol = 50

  let setVisFromScoll = yC => {
    let sY = lastY - yC
    lastY = y
    console.log('visscroll: ', y, lastY, sY)
    return y > offset && sY < 0 ? false : true
  }

  $: menuVisible = setVisFromScoll(y)

  $: console.log('scroll: ', y, lastY, menuVisible)
  $: headStyle = styled(
    {
      pos: 'fixed',
      t: 0,
      w: '100%',
      zIndex: 100,
      bg: theme.colors.header,
      borderBottom: '1px solid',
      borderColor: theme.colors.primary,
      fontWeight: 300,
      p: '0',
    },
    theme,
  )
  $: flexStyle = {
    justc: 'space-between',
    align: 'stretch',
    px: '.25rem',
    py: '.25rem',
  }
  $: navStyle = styled(
    {
      d: 'flex',
      justc: 'stretch',
      align: 'stretch',
      px: '.25rem',
      py: '.25rem',
      maxw: '40rem',
      slf: 'center',
    },
    theme,
  )
  $: flexNavStyle = {
    direction: 'column',
    justc: 'center',
    alignC: 'center',
  }
  $: brandStyle = {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 900,
    width: '100%',
    my: '.4rem',
    fontSize: '2.8em',
  }
  $: brandLinkStyle = {
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: 900,
  }
  $: menuLinkStyle = {
    color: theme.colors.secondary,
    textTransform: 'uppercase',
    textDecoration: 'none',
    px: '1rem',
    py: '.25rem',
    _hover: {
      bg: theme.colors.secondary,
      color: theme.colors.background,
    },
  }

  $: menuLinkSelected = {
    ...menuLinkStyle,
    color: theme.colors.primary,
    _hover: {
      bg: theme.colors.primary,
      color: theme.colors.background,
    },
  }

  $: homeLink = segment === undefined ? menuLinkSelected : menuLinkStyle
  $: statsLink = segment === 'stats' ? menuLinkSelected : menuLinkStyle
  $: aboutLink = segment === 'about' ? menuLinkSelected : menuLinkStyle
  $: blogLink = segment === 'blog' ? menuLinkSelected : menuLinkStyle

  $: title = segment === undefined ? 'Keep Informed' : segment

  $: logoStyle = {
    w: '220px',
    h: '40px',
    f: theme.colors.primary,
    _hover: {
      f: theme.colors.secondary,
    },
  }
  $: navBttn = styled(
    {
      d: ['block', 'none', 'none'],
      w: '40px',
      h: '30px',
      border: '2px solid',
      borderColor: theme.colors.muted,
      pt: '5px',
      mt: '12px',
      mr: '12px',
    },
    theme,
  )
  $: navBttnSpan = styled(
    {
      d: 'block',
      w: '100%',
      h: '2px',
      mb: '3px',
      bg: theme.colors.muted,
    },
    theme,
  )
</script>

<svelte:head>
  <title>PSA Covid-19: {title}</title>
</svelte:head>
<svelte:window bind:scrollY={y} />
<nav class={headStyle} transition:slide={{ delay: 80, duration: 600 }}>
  <Flex style={flexNavStyle}>
    <Flex style={flexStyle}>
      <Heading as="h1" style={brandStyle}>
        <Link href="." style={brandLinkStyle}>PSA: COVID-19</Link>
      </Heading>
      <button class={navBttn} on:click={() => (menuVisible = !menuVisible)}>
        <span class={navBttnSpan} />
        <span class={navBttnSpan} />
        <span class={navBttnSpan} />
      </button>
      <button
        on:click={() => window.scroll({
            top: 0,
            left: 0,
            behaviour: 'smooth',
          })}>
        Top
      </button>
    </Flex>
    {#if menuVisible}
      <div class={navStyle} transition:slide={{ delay: 50, duration: 600 }}>
        <Link href="." style={homeLink}>home</Link>
        <Link href="stats" style={statsLink}>stats</Link>
        <Link href="about" style={aboutLink}>about</Link>
        <Link href="blog" style={blogLink}>blog</Link>
      </div>
    {/if}
  </Flex>
</nav>
