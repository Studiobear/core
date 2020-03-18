<script>
  import { onMount } from 'svelte'
  import { styled } from '@studiobear/designspek'
  import { Flex, Box, Heading, Text } from '@studiobear/designspek-components'
  import { theme } from '../theme'

  import { fatalityRate, recoveryRate, calcC19Stats } from '../libs'
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
  // let url =
  //   'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&outFields=Country_Region,Confirmed,Deaths,Recovered,Active&orderByFields=Confirmed%20desc'

  let url =
    'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&outFields=Country_Region,Province_State,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active&returnGeometry=true'

  url =
    'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&outFields=Country_Region,Province_State,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active&returnGeometry=true'

  $: flexStyle = {
    flexdir: 'column',
  }
  $: headerStyle = {
    bg: $theme.colors.background,
    fontSize: '3em',
    fontWeight: 300,
    txtalign: 'center',
  }
  $: banner = styled(
    {
      w: '100%',
      h: 'auto',
    },
    { theme: $theme },
  )

  onMount(async function getData() {
    let combined = {}
    const resp = await fetch(url)
    let temp = await resp.json()
    let records = temp['features']
    statsGlobal = calcC19Stats(records)

    total_confirmed = statsGlobal.totalConfirmed
    total_active = statsGlobal.totalActive
    total_recovered = statsGlobal.totalRecovered
    total_deaths = statsGlobal.totalDeaths
    total_fatality_rate = (total_deaths / total_confirmed) * 100
    total_recovery_rate = (total_recovered / total_confirmed) * 100
    data = statsGlobal.data
  })
</script>

<Flex style={flexStyle}>
  <Box>
    <img
      src="23313_lores.jpg"
      width="700"
      height="454"
      class={banner}
      alt="Computer generated rendering of Covid 19 [Source: CDC Public Health
      Image Library (https://phil.cdc.gov/)]" />
  </Box>
  <Heading as="h1" style={headerStyle}>Be Calm & Informed</Heading>
  <Text />
  <Heading as="h1" style={headerStyle}>Be Aware & Take Care</Heading>
  <Heading as="h1" style={headerStyle}>Legend</Heading>
  <table class="table is-bordered is-narrow is-hoverable">
    <thead>
      <tr>
        <th class="has-background-danger">Higher than Average Fatality</th>
        <th class="has-background-warning">Lower than Average Recovery</th>
        <th class="has-background-success">
          Higher than Average Recovery OR Lower than Average Fatality
        </th>
        <th class="has-background-link">More Active than Recovered</th>
        <th class="has-background-primary">More Recovered than Active</th>
      </tr>
    </thead>
  </table>
</Flex>
<Flex style={flexStyle}>
  <h1 class="title">Totals:</h1>
  <table class="table is-bordered is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Confirmed</th>
        <th>Active</th>
        <th>Recovered</th>
        <th>Deaths</th>
        <th>Fatality Rate</th>
        <th>Recovery Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{total_confirmed}</td>
        <td>{total_active}</td>
        <td>{total_recovered}</td>
        <td>{total_deaths}</td>
        <td>{total_fatality_rate.toFixed(2)}%</td>
        <td>{total_recovery_rate.toFixed(2)}%</td>
      </tr>
    </tbody>
  </table>
</Flex>
<Flex style={flexStyle}>
  <h1 class="title">By Country:</h1>
  <table class="table is-bordered is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Country Name</th>
        <th>Confirmed</th>
        <th>Active</th>
        <th>Recovered</th>
        <th>Deaths</th>
        <th>Fatality Rate</th>
        <th>Recovery Rate</th>
      </tr>
    </thead>
    <tbody>
      {#each Object.keys(data) as item}
        <tr>
          <td>{String(JSON.stringify(item)).replace(/"/g, '')}</td>
          <td>{JSON.stringify(data[item]['Confirmed'])}</td>
          <td
            class={data[item]['Recovered'] < data[item]['Active'] ? 'has-background-link' : ''}>
            {JSON.stringify(data[item]['Active'])}
          </td>
          <td
            class={data[item]['Recovered'] > data[item]['Active'] ? 'has-background-primary' : ''}>
            {JSON.stringify(data[item]['Recovered'])}
          </td>
          <td>{JSON.stringify(data[item]['Deaths'])}</td>
          <td
            class="{fatalityRate(data[item]) > total_fatality_rate ? 'is-danger' : ''}{fatalityRate(data[item]) < total_fatality_rate ? 'is-success' : ''}">
            {fatalityRate(data[item]).toFixed(2)}%
          </td>
          <td
            class="{recoveryRate(data[item]) < total_recovery_rate ? 'is-warning' : ''}{recoveryRate(data[item]) > total_recovery_rate ? 'is-success' : ''}">
            {recoveryRate(data[item]).toFixed(2)}%
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</Flex>
