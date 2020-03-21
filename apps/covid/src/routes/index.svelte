<script>
  import { onMount } from 'svelte'
  import { styled } from '@studiobear/designspek'
  import Image from 'svelte-image'
  import { Flex, Box, Heading, Text } from '@studiobear/designspek-components'
  import { theme } from '../theme'
  import {
    Nav,
    SSR,
    OverviewBoxGlobal,
    Icon,
    Card,
    CardHead,
    CardBody,
  } from '../components'

  import { fatalityRate, recoveryRate, calcC19Stats } from '../libs'

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

  let url =
    'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&outFields=Country_Region,Province_State,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active&returnGeometry=true&orderByFields=Confirmed%20desc'

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
  onMount(async function getData() {
    ssr = false
    let combined = {}
    const resp = await fetch(url)
    let temp = await resp.json()
    // let temp = {}
    let records = temp['features']
    if (records) statsGlobal = calcC19Stats(records)

    overview = {
      confirmed: statsGlobal.totalConfirmed,
      active: statsGlobal.totalActive,
      recovered: statsGlobal.totalRecovered,
      deaths: statsGlobal.totalDeaths,
      fatalityRate: statsGlobal.totalFatalityRate,
      recoveryRate: statsGlobal.totalRecoveryRate,
      updated: statsGlobal.lastUpdated,
    }
    data = statsGlobal.data
  })
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
  <OverviewBoxGlobal {overview} theme={$theme} {ssr} />
  <Heading as="h1" style={headerStyle}>Take Care & Stay Aware</Heading>
  <Card theme={$theme} style={emphasisCard}>
    <CardBody>
      <Heading as="h3" style={h3Emphasis}>
        The best way to protect yourself and everyone else is to avoid being
        exposed to the virus.
      </Heading>
    </CardBody>
  </Card>
  <Card theme={$theme}>
    <CardHead>
      <Icon name="infection" style={icon} fill={$theme.colors.tertiary} />
      <Heading as="h3">Social Distancing for the Win</Heading>
    </CardHead>
    <CardBody>
      <Text>
        <strong>Virus is most likely spread from person-to-person.</strong>
        Try to stay at least 6 feet (~2m) away from other people out in public.
        Virus can travel through respitory droplets from infected cough or
        sneeze landing on surfaces, skin and mucas membranes or inhaled.
      </Text>
    </CardBody>
  </Card>
  <Card theme={$theme}>
    <CardHead>
      <Icon name="coronavirus-2" style={icon} fill={$theme.colors.tertiary} />
      <Heading as="h3">Wash your hands often.</Heading>
    </CardHead>
    <CardBody>
      <Text>
        <strong>Best: Warm water and soap for 20 seconds.</strong>
        Alcohol-based sanitizer with at least 70% alcohol or diluted household
        bleach (4tsp/qt of water) will work in a pinch too.
      </Text>
    </CardBody>
  </Card>
  <Card theme={$theme}>
    <CardHead>
      <Icon name="coronavirus-1" style={icon} fill={$theme.colors.tertiary} />
      <Heading as="h3">Keep your germs to yourself</Heading>
    </CardHead>
    <CardBody>
      <Text>
        <strong>If sick, stay home except to get medical care.</strong>
        Cover coughs and sneezes and after immediately wash hands. Facemasks are
        best worn when sick and in public and otherwise saved for caregivers.
      </Text>
    </CardBody>
  </Card>
</Flex>
