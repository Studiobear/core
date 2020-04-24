<script>
  import { getClient, mutate } from 'svelte-apollo'
  import { storeUser } from '../../stores'
  import Form from '@svelteschool/svelte-forms'
  import { styled } from '@studiobear/designspek'
  import { Button } from '@studiobear/designspek-components'

  import { LOGIN } from '../../graphql'
  export let theme = $$props.theme || {}

  const gqlClient = getClient()
  let values = {}

  $: userLabel = values.hasOwnProperty('inputUser') && values.inputUser !== ''
  $: passLabel = values.hasOwnProperty('inputPass') && values.inputPass !== ''

  $: labelUser = styled(
    {
      color: userLabel ? theme.colors.primary : theme.colors.background,
      pb: '0.5em',
    },
    theme,
  )
  $: labelPass = styled(
    {
      color: passLabel ? theme.colors.primary : theme.colors.background,
      pb: '0.5em',
    },
    theme,
  )
  $: bttnLogin = {
    bg: theme.colors.secondary,
    p: '.5rem 2rem',
    w: '50%',
    m: '1rem auto 0',
    txtTran: 'uppercase',
  }

  const handleLogin = async e => {
    e.preventDefault()
    console.log('login e', e)
    let login
    try {
      login = await mutate(gqlClient, {
        mutation: LOGIN,
        variables: { username: values.inputUser, password: values.inputPass },
      })
    } catch (error) {
      console.log('login error:', error)
    }
    await console.log('login', login)
    await storeUser.auth(login.data.login.token)
    values = {}
  }
</script>

<Form bind:values>
  <fieldset>
    <legend>LOGIN</legend>
    <label for="inputUser" class={labelUser}>Username</label>
    <input placeholder="Username" type="text" name="inputUser" size="" />
    <label for="inputPass" class={labelPass}>Password</label>
    <input placeholder="Password" type="password" name="inputPass" />
  </fieldset>
</Form>

<Button style={bttnLogin} type="submit" on:click={e => handleLogin(e)}>
  Login
</Button>
