<script>
  import { Flex, Box, Heading, Text } from '@studiobear/designspek-components'
  import { theme } from '../theme'

  $: flexStyle = {
    flexdir: 'column',
    mb: '4rem',
    mt: '4rem',
    px: ['1.5rem', '1.5rem', '1.5rem', '1.5rem', '2rem'],
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
</script>

<svelte:head>
  <title>Why</title>
</svelte:head>

<Flex style={flexStyle}>
  <Heading as="h1" style={headerStyle}>Why?</Heading>

  <Text>Changing the context...</Text>
</Flex>
