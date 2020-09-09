<script>
  import { styled } from '@studiobear/designspek'
  import {
    Counter,
    Flex,
    Box,
    Heading,
  } from '@studiobear/designspek-components'
  import Image from 'svelte-image'

  import { theme } from '../theme'

  let ssr = true

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
</script>

<svelte:head>
  <title>Studiobear | a full-service persona for all things design</title>
</svelte:head>

<Flex style={flexStyle}>
  <Box style={{ h: 'auto', objectFit: 'cover' }}>
    <Image
      class={banner}
      src="great-success.png"
      width="700"
      height="454"
      alt="Borat" />
  </Box>
  <Heading as="h1" style={headerStyle} {ssr}>Keep Calm & Stay Informed</Heading>
  <Heading as="h3">Local library component demo</Heading>
  <p>
    Our counter component from sample Svelte component Library from root dir:
    `/libs/my-svelte-component-library`
  </p>
  <div class="component-container">
    <Counter />
  </div>

  <p>
    <strong>
      Try editing this file (src/routes/index.svelte) to test live reloading.
    </strong>
  </p>

  <Box bg={'colors.primary'} color={'colors.secondary'}>
    {$theme.colors.primary}
  </Box>
</Flex>

<Heading as="h1">Great success!</Heading>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure>
