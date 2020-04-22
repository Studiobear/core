<script>
  import { addGlobal } from '@studiobear/designspek'
  import Form from '@svelteschool/svelte-forms'
  import { theme } from './theme'
  import {
    Section,
    Grid,
    Flex,
    Box,
    Heading,
    Text,
    Button,
  } from '@studiobear/designspek-components'

  import { Header, User } from './components/index'

  $: addGlobal($theme)

  $: primary = $theme.colors.primary
  $: secondary = $theme.colors.secondary
  $: background = $theme.colors.background
  $: main = {
    bg: primary,
  }

  $: grid = {
    textalign: 'center',
    pb: '4rem',
  }

  $: h1Style = {
    color: primary,
    lineHeight: '1.8em',
    txtAlign: 'center',
    position: 'relative',
    m: 0,
  }
  $: h2Style = {
    color: secondary,
    fontSize: '2em',
    lineHeight: '1.8em',
    txtAlign: 'center',
    position: 'relative',
    m: 0,
  }

  let contentGrid = {
    justc: 'center',
    alignc: 'center',
    minh: ['20em', '30em', '40em'],
  }

  $: content = {
    d: 'flex',
    flexdir: 'column',
    textalign: 'center',
    p: '1em 2em 3em',
    mt: '16rem',
    minw: ['10em', '15em', '20em'],
    maxw: '100%',
    bg: background,
  }

  $: bttnLogin = {
    p: '.5rem 2rem',
    w: '50%',
    mt: '1rem',
  }

  let values
</script>

<Box style={main}>
  <Grid container gridgap={0} style={grid}>
    <Header theme={$theme} />
    <Section as="main">
      <Grid container style={contentGrid}>
        <Flex style={content}>
          <Heading as="h1" style={h1Style}>
            Y&auml;ger Galerie Collections
          </Heading>
          <Form bind:values>
            <fieldset>
              <legend>LOGIN</legend>
              <label for="inputUser">Username</label>
              <input
                placeholder="Username"
                type="text"
                name="inputUser"
                size="" />
              <label for="inputPass">Password</label>
              <input placeholder="Password" type="password" name="inputPass" />
              <Button style={bttnLogin}>Login</Button>
            </fieldset>
          </Form>
        </Flex>
      </Grid>
    </Section>
  </Grid>
</Box>
