<script context="module">
  import { client } from './libs'
  import { GET_ME } from './graphql'

  export async function preload() {
    return {
      cache: await client.query({ query: GET_ME }),
    }
  }
</script>

<script>
  import { addGlobal } from '@studiobear/designspek'
  import { setClient, getClient, restore, query } from 'svelte-apollo'
  import { Section, Grid, Box } from '@studiobear/designspek-components'

  import { getStorageKeys, getStorageItem } from './libs'
  import { theme } from './theme'
  import { storeUser, lfUser } from './stores'

  import { Header, Footer, Login } from './components/index'

  const preloading = preload()
  setClient(client)
  const gqlClient = getClient()

  export let cache
  if (cache && cache.hasOwnProperty('data'))
    restore(gqlClient, GET_ME, cache.data)

  if (process.browser) {
    lfUser
      .ready()
      .then(async () => {
        let keys = await getStorageKeys(lfUser)
        if (keys.includes('token')) {
          let token = await getStorageItem('token', lfUser)
          await storeUser.auth(token)
        }
      })
      .catch(function(e) {
        console.log('local storage error:', e)
      })
  }

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

  const me = query(gqlClient, { query: GET_ME })
  $: console.log('App: ', $storeUser, me)
</script>

<Box style={main}>
  <Grid container gridgap={0} style={grid}>
    <Header theme={$theme} />
    <Section as="main">
      <Login theme={$theme} />
      {#await preloading}
        <p>Preloading user....</p>
      {:then preloaded}
        <p>Preloaded user....</p>
      {:catch error}
        <p>Error preloading user: {error}</p>
      {/await}
    </Section>
  </Grid>
  <Footer />
</Box>
