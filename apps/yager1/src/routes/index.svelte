<script>
  import { styled } from '@studiobear/designspek'
  import Image from 'svelte-image'
  import {
    Flex,
    Box,
    Heading,
    Text,
    Card,
    CardHead,
    CardBody,
  } from '@studiobear/designspek-components'
  import { theme } from '../theme'
  import { Nav, SSR, Icon } from '../components'

  let ssr = true
  let data = []
  let statsGlobal = []
  let total_deaths = 0
  let total_confirmed = 0
  let total_active = 0
  let total_recovered = 0
  let total_fatality_rate = 0
  let total_recovery_rate = 0
  let total_compare = 0
  let last_updated = 0
  let overview = {}

  $: flexStyle = {
    flexdir: 'column',
    py: '4rem',
  }
  $: headerStyle = {
    bg: $theme.colors.background,
    fontSize: '3rem',
    lineHeight: '3rem',
    fontWeight: 300,
    textAlign: 'center',

    px: '1rem',
    my: '1rem',
  }

  $: banner = styled(
    {
      w: '100%',
      h: 'auto',
    },
    $theme,
  )
  $: bannerProps = ssr ? { style: banner } : { class: banner }
  let emphasisCard = {
    bg: $theme.colors.tertiary,
  }
  let h3Emphasis = {
    fontWeight: 700,
    fontSize: '2rem',
    textAlign: 'center',
    lineHeight: '3rem',
    my: '1rem',
    color: $theme.colors.background,
  }
  let icon = {
    w: '6rem',
    h: 'auto',
    mr: '1rem',
  }
</script>

<Flex style={flexStyle}>
  <Box style={{ h: 'auto', objectFit: 'cover' }}>
    <Image
      class={banner}
      src="23313_lores.jpg"
      width="700"
      height="454"
      alt="Computer generated rendering of Covid 19 [Source: CDC Public Health
      Image Library (https://phil.cdc.gov/)]" />
    <!--
    <img
      src="23313_lores.jpg"
      width="700"
      height="454"
      {...bannerProps}
       />
       -->
  </Box>
  <Heading as="h1" style={headerStyle} {ssr}>Keep Calm & Stay Informed</Heading>
</Flex>
