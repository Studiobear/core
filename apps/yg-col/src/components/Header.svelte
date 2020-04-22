<script>
  import { onMount } from 'svelte'
  import { flip } from 'svelte/animate'
  import { quintOut } from 'svelte/easing'
  import { scale } from 'svelte/transition'
  import { styled } from '@studiobear/designspek'
  import Image from 'svelte-image'
  import theme from '../theme'
  import {
    Section,
    Flex,
    Box,
    Heading,
  } from '@studiobear/designspek-components'

  let y = 0
  let topOffset = 20

  $: topSmall = y > topOffset ? true : false

  $: background = $theme.colors.background
  $: header = {
    pos: 'fixed',
    t: 0,
    w: '100%',
    zIndex: 100,
    p: '0',
    maxw: '100vw',
    bg: background,
  }
  $: flex = {
    maxh: topSmall ? '105px' : '210px',
    w: '100%',
    justc: 'flex-end',
    alignc: 'center',
    pos: 'relative',
    zIndex: 1,
    transition: '1s',
  }
  $: brandIY = {
    minw: [
      topSmall ? '150px' : '220px',
      topSmall ? '170px' : '250px',
      topSmall ? '250px' : '300px',
      topSmall ? '330px' : '400px',
    ],
    h: '100%',
    p: '.5rem',
    pos: 'absolute',
    zIndex: 110,
    t: '1rem',
    l: '1rem',
    transition: '1s',
  }
  $: iySmall = {
    minw: '314px',
  }
  $: brandYG = {
    minw: [
      topSmall ? '80px' : '100px',
      topSmall ? '90px' : '110px',
      topSmall ? '90px' : '120px',
      topSmall ? '90px' : '134px',
    ],
    h: '100%',
    p: '.5rem',
    transition: '1s',
    mr: '2rem',
  }
  $: iyBrand = styled(
    {
      w: '100%',
      h: 'auto',
    },
    $theme,
  )
  $: ygBrand = styled(
    {
      w: '100%',
      h: 'auto',
    },
    $theme,
  )
</script>

<svelte:head>
  <title>Yager Galerie: Collections of Ira Yeager</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

<Section as="header" style={header}>
  <Flex style={flex}>
    <Box style={brandIY}>
      <Image
        class={iyBrand}
        src="IY-logo.png"
        width="470"
        height="180"
        alt="Ira Yeager Studios" />
    </Box>
    <Box style={brandYG}>
      <Image
        class={ygBrand}
        src="YG-logo.png"
        width="134"
        height="180"
        alt="Yager Galerie | Napa Valley - Calistoga, CA" />
    </Box>
  </Flex>
</Section>
