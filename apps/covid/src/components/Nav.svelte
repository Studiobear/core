<script>
  import {
    Section,
    Flex,
    Link,
    Heading,
  } from '@studiobear/designspek-components'
  export let segment
  export let theme = $$props.theme || {}
  import Logo from './Logo.svelte'

  // let src = 'ds-horiz.svg'
  // console.log('Nav: ', Logo)
  $: navStyle = {
    pos: 'fixed',
    t: 0,
    w: '100%',
    zIndex: 100,
    bg: theme.colors.background,
    borderBottom: '1px solid',
    borderColor: theme.colors.primary,
    fontWeight: 300,
    p: '0',
  }
  $: flexStyle = {
    justc: 'space-between',
    align: 'stretch',
    px: '.25rem',
    py: '.25rem',
  }
  $: flexNavStyle = {
    justc: 'center',
    align: 'center',
    position: 'relative',
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
    color: theme.colors.primary,
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    px: '1rem',
    mx: '.25rem',
    pb: '.25rem',
    brd: '2px solid',
    brdCol: theme.colors.background,
    _hover: {
      brd: '2px solid',
      brdCol: theme.colors.secondary,
      color: theme.colors.secondary,
    },
  }

  $: menuLinkSelected = {
    ...menuLinkStyle,
    brd: '2px solid',
    brdCol: theme.colors.primary,
    _hover: {
      brdCol: theme.colors.secondary,
      color: theme.colors.secondary,
    },
  }

  $: homeLink = segment === undefined ? menuLinkSelected : menuLinkStyle
  $: statsLink = segment === 'stats' ? menuLinkSelected : menuLinkStyle
  $: aboutLink = segment === 'about' ? menuLinkSelected : menuLinkStyle
  $: blogLink = segment === 'blog' ? menuLinkSelected : menuLinkStyle

  $: logoStyle = {
    w: '220px',
    h: '40px',
    f: theme.colors.primary,
    _hover: {
      f: theme.colors.secondary,
    },
  }
</script>

<Section as="nav" style={navStyle}>
  <Flex dir="row" style={flexStyle}>
    <Heading as="h1" style={brandStyle}>
      <Link href="." style={brandLinkStyle}>COVID-19 INFORMER</Link>
    </Heading>
  </Flex>
  <Flex dir="column" style={flexStyle}>
    <Link href="." style={homeLink}>home</Link>
    <Link href="stats" style={statsLink}>stats</Link>
    <Link href="about" style={aboutLink}>about</Link>
    <Link href="blog" style={blogLink}>blog</Link>
  </Flex>
</Section>
