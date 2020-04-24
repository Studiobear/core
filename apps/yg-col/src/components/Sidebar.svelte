<script>
  import get from 'lodash/get'
  import {
    Section,
    Flex,
    Box,
    Text,
    Button,
  } from '@studiobear/designspek-components'
  import { storeUser } from '../stores'

  export let theme = $$props.theme || {}
  export let user = $$props.user || null
  $: console.log('user', user)
  $: username = get(user, 'username', null)
  $: display = get(user, 'display', null)
  $: footer = {
    color: theme.colors.background,
    area: 'sidebar',
    d: 'flex',
    flexdir: 'column',
    justc: 'center',
    align: 'stretch',
    bl: '1px solid',
    brdCol: theme.colors.secondary,
    mt: '4rem',
    px: '2.5rem',
  }
  $: flex = {
    justc: 'flex-end',
    align: 'stretch',
  }

  $: p = {
    color: theme.colors.secondary,
    txtAlign: 'right',
    fontSize: '1rem',
    lineHeight: '1.4rem',
  }

  $: bttnLogout = {
    bg: theme.colors.primary,
    color: theme.colors.secondary,
    brd: '1px solid',
    brdCol: theme.colors.secondary,
    fontSize: '0.9rem',
    p: '.25rem 1rem',
    txtTran: 'uppercase',
  }

  const handleLogout = async e => {
    e.preventDefault()
    await storeUser.auth('')
  }
</script>

<Section as="nav" style={footer}>
  <Flex style={flex}>
    <Box style={{ txtAlign: 'right' }}>
      <Text style={p}>Welcome {display}</Text>
      <Text style={p}>{username}</Text>
      <Button style={bttnLogout} type="submit" on:click={e => handleLogout(e)}>
        Logout
      </Button>
    </Box>
  </Flex>
</Section>
