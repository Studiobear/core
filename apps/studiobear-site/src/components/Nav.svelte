<script>
  import { styled } from '@studiobear/designspek'
  import {
    Section,
    Flex,
    Box,
    Heading,
  } from '@studiobear/designspek-components'
  import Logo from './Logo.svelte'
  import theme from '../theme'

  export let segment

  const navItems = {
    flexdir: 'row',
    align: 'center',
    justc: 'space-between',
  }
  const logoCont = {
    p: '1rem',
    d: 'flex',
    flexidr: 'row',
    justc: 'start',
    align: 'center',
    ml: '.5rem',
  }
  const logo = {
    w: '3rem',
    h: '3rem',
  }

  $: logotype = {
    color: $theme.colors.primary,
    fontWeight: '700',
    ml: '1.5rem',
    mb: 0,
  }
  $: tagline = {
    color: $theme.colors.primary,
    fontWeight: '300',
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
    ml: '1rem',
    pl: '1rem',
    bl: `1px solid ${$theme.colors.primary}`,
    mb: 0,
    py: '.5rem',
  }

  const ul = styled(
    {
      content: '""',
      d: 'flex',
      flexdir: 'row',
      flexWrap: 'wrap',
      justc: 'center',
      listStyle: 'none',
      pr: '1rem',
    },
    $theme,
  )
  const li = styled(
    {
      pos: 'relative',
    },
    $theme,
  )
  const menuLink = {
    d: 'flex',
    align: 'flex-start',
    color: $theme.colors.tertiary,
    txtTran: 'uppercase',
    textDecoration: 'none',
    fontSize: '1.2rem',
    px: '1.5rem',
    py: '1rem',
    _hover: {
      bg: $theme.colors.tertiary,
      color: $theme.colors.background,
    },
    _active: {
      bg: $theme.colors.secondary,
    },
  }

  $: menuLinkStyle = styled(
    {
      ...menuLink,
    },
    $theme,
  )

  $: menuLinkSelected = styled(
    {
      ...menuLink,
      _hover: {
        bg: $theme.colors.secondary,
        color: $theme.colors.background,
      },
      _active: {
        bg: $theme.colors.primary,
      },
      _after: {
        position: 'absolute',
        content: '""',
        w: 'calc(100% - 0.5em)',
        h: '2px',
        bg: $theme.colors.secondary,
        d: 'block',
        b: '-1px',
        l: '0.25em',
      },
    },
    $theme,
  )

  $: homeLink = segment === undefined ? menuLinkSelected : menuLinkStyle
  $: aboutLink = segment === 'about' ? menuLinkSelected : menuLinkStyle
  $: blogLink = segment === 'blog' ? menuLinkSelected : menuLinkStyle
</script>

<Section as="nav">
  <Flex style={navItems}>
    <Box style={logoCont}>
      <Logo viewBox="0 0 220 220" fill="#000" style={logo} />
      <Heading as="h1" style={logotype}>Studiobear</Heading>
      <Heading as="h2" style={tagline}>
        roaming the landscape of form + function
      </Heading>
    </Box>
    <ul class={ul}>
      <li class={li}><a class={homeLink} href=".">home</a></li>
      <li class={li}><a class={aboutLink} href="about">about</a></li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li class={li}><a class={blogLink} href="blog">blog</a></li>
    </ul>
  </Flex>
</Section>
