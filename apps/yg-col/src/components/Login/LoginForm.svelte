<script>
  import Form from '@svelteschool/svelte-forms'
  import { styled } from '@studiobear/designspek'
  import { Button } from '@studiobear/designspek-components'

  export let theme = $$props.theme || {}

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
    mt: '1rem',
    txtTran: 'uppercase',
  }
</script>

<Form bind:values>
  <fieldset>
    <legend>LOGIN</legend>
    <label for="inputUser" class={labelUser}>Username</label>
    <input placeholder="Username" type="text" name="inputUser" size="" />
    <label for="inputPass" class={labelPass}>Password</label>
    <input placeholder="Password" type="password" name="inputPass" />
    <Button style={bttnLogin}>Login</Button>
  </fieldset>
</Form>
