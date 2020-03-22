<script>
  import { tick } from 'svelte'
  import { Flex, Box, Heading, Button } from '@studiobear/designspek-components'
  import GetContextFab from './GetContextFab.svelte'
  import Modal from '../Modal.svelte'
  import Loading from '../Loading.svelte'
  import { insertCommas } from '../../libs'
  export let theme = $$props.theme || {}
  export let ssr = $$props.ssr || {}
  export let overview
  let location = ''
  let locationType = 'default'
  $: locationData = {
    status: 'start',
    message: '',
  }

  let modalVisible = false
  let getLocation = true

  $: active = overview.active || 0
  $: recovered = overview.recovered || 0
  $: confirmed = overview.confirmed || 0
  $: deaths = overview.deaths || 0
  $: fatalityRate = overview.fatalityRate || 0
  $: recoveryRate = overview.recoveryRate || 0
  $: updated = overview.updated

  $: overviewBox = {
    flexdir: 'column',
    align: 'center',
    bg: theme.colors.muted,
    mx: 'auto',
    py: '1rem',
    w: '100vw',
  }
  let overviewSingleBox = {
    flexdir: 'column',
    align: 'center',
    w: '100%',
    txtalign: 'center',
    d: 'flex',
    flexdir: 'column',
    alignc: 'stretch',
    my: '0.5rem',
  }
  let overviewMiddleBox = {
    flexdir: 'row',
    width: '100%',
    alignc: 'stretch',
    pb: '1.5rem',
  }
  $: overviewSingleBoxActive = {
    ...overviewSingleBox,
    bg: theme.colors.quaternary,
    pb: '1.5rem',
  }

  $: overviewBottomBox = {
    ...overviewMiddleBox,
    bg: theme.colors.grey,
  }
  $: ovTitle = {
    letterSpacing: '0.25rem',
    fontWeight: 900,
    color: theme.colors.tertiary,
    textTransform: 'uppercase',
  }

  $: nmTitle = {
    ...ovTitle,
    txtAlign: 'center',
    lineHeight: '1.2rem',
  }

  let modal = {
    pt: '1rem',
    px: '1.5rem',
    maxw: '80vw',
  }

  $: loading = {
    animation: 'spin 6s infinite',
  }

  const openModal = async e => {
    modalVisible = e.detail.go
  }

  function closeModal(e) {
    modalVisible = e.detail.close
  }

  const chooseLocation = () => {}

  const geocodeLocation = async (lat, lng) => {
    const API_KEY = process.env.GEOCODING_API_KEY
    let geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`

    const resp = await fetch(geoCodeURL)
    let temp = await resp.json()
    await console.log('geocodeLocation', lat, lng, temp)
    // locationData.status = 'received'
  }
  const getGeoLocation = () => {
    locationData.status = 'loading'
    const success = position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      locationData.message = `Latitude: ${latitude} °, Longitude: ${longitude} °`
      geocodeLocation(latitude, longitude)
      getLocation = false
    }

    const error = () => {
      locationData.error = true
      locationData.status = 'error'
      locationData.message = 'Unable to retrieve your location'
    }

    if (!navigator.geolocation) {
      locationData.status = 'error'
      locationData.message = 'Geolocation is not supported by your browser'
    } else {
      locationData.message = 'Locating…'
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }

  $: console.log('locationData:', locationData)
</script>

<Modal style={modal} bind:show={modalVisible} on:message={closeModal}>
  {#if getLocation && locationData.status === 'start'}
    <Button on:click={getGeoLocation}>
      <Heading as="h6" style={nmTitle}>Use My location</Heading>
    </Button>
    <Heading as="h4" style={nmTitle}>Or</Heading>
    <Button>
      <Heading as="h6" style={nmTitle}>Use California, USA</Heading>
    </Button>
  {:else if locationData.status === 'loading'}
    <Loading {theme} fill={theme.colors.primary} style={loading} />
    <Heading as="h6" style={nmTitle}>Use My location</Heading>
  {:else}
    <Heading as="h6" style={nmTitle}>Use My location</Heading>
  {/if}
</Modal>

<Flex style={overviewBox} {ssr}>
  {#if getLocation && locationData.status === 'start'}
    <Box style={overviewSingleBox} {ssr}>
      <GetContextFab {theme} {ssr} on:message={openModal} />
      <Heading as="h6" style={ovTitle} {ssr}>Near Me</Heading>
    </Box>
  {:else if locationData.status === 'loading'}
    <Box style={overviewSingleBox}>
      <Loading {theme} fill={theme.colors.primary} style={loading} />
      <Heading as="h6" style={ovTitle}>loading...</Heading>
    </Box>
  {:else if locationData.status === 'error'}
    <Box style={overviewSingleBox}>
      <GetContextFab {theme} on:message={openModal} />
      <Heading as="h6" style={ovTitle}>{locationData.message}</Heading>
    </Box>
  {:else if locationData.status === 'received'}
    <Box style={overviewSingleBox}>
      <Heading as="h6" style={ovTitle}>{locationData.message}</Heading>
    </Box>
  {:else}
    <Box style={overviewSingleBox}>
      <Heading as="h6" style={ovTitle}>
        Current Location: {locationData.message}
      </Heading>
    </Box>
  {/if}
</Flex>
