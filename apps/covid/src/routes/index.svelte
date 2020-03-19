<script>
  import { onMount } from 'svelte'
  import { styled } from '@studiobear/designspek'
  import Image from 'svelte-image'
  import { Flex, Box, Heading, Text } from '@studiobear/designspek-components'
  import { theme } from '../theme'
  import { Nav, SSR, OverviewBoxGlobal, Icon, Card } from '../components'

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
    'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&outFields=Country_Region,Province_State,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active&returnGeometry=true'

  $: flexStyle = {
    flexdir: 'column',
    mb: '4rem',
  }
  $: headerStyle = {
    bg: $theme.colors.background,
    fontSize: '3rem',
    lineHeight: '3rem',
    fontWeight: 300,
    textAlign: 'center',
    px: '1rem',
  }
  $: banner = styled(
    {
      w: '100%',
      h: 'auto',
    },
    $theme,
  )
  $: bannerProps = ssr ? { style: banner } : { class: banner }
  $: overviewBox = {
    flexdir: 'column',
    align: 'center',
    brd: '1px solid',
    brdCol: $theme.colors.muted,
  }
  let overviewSingleBox = {
    flexdir: 'column',
    align: 'center',
    w: '100%',
    txtalign: 'center',
    d: 'flex',
    flexdir: 'column',
    alignc: 'stretch',
  }

  let overviewDoubleBox = {
    flexdir: 'row',
    width: '100%',
    alignc: 'stretch',
  }
  let icon = {
    w: '10rem',
    h: '10rem',
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

  <Text />
  <Heading as="h1" style={headerStyle}>Take Care & Stay Aware</Heading>
  <Card theme={$theme}>
    <Flex>
      <Icon name="coronavirus-2" style={icon} fill={$theme.colors.tertiary} />
      <Heading as="h3">Wash your hands often.</Heading>
    </Flex>
    <Box>
      <Text>
        <strong>Best = Warm water and soap for 20 seconds.</strong>
        Hand sanitizer with at least 60% alcohol will work in a pinch too.
      </Text>
    </Box>
  </Card>
</Flex>
