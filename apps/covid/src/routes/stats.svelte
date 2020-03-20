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

  $: flexMain = {
    flexdir: 'column',
    mt: '3rem',
    maxw: '100vw',
  }
  $: flexStyle = {
    flexdir: 'column',
    mt: '0.5rem',
    maxw: '100vw',
  }
  $: headerStyle = {
    bg: $theme.colors.background,
    fontSize: '3rem',
    lineHeight: '3rem',
    fontWeight: 300,
    textAlign: 'center',
    px: '1rem',
    mt: '1rem',
    mb: 0,
  }
  $: h2Style = {
    lineHeight: '2.8rem',
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
    { theme: $theme },
  )

  $: table = {
    borderCollapse: 'collapse',
    overflowX: 'auto',
    w: 'fit-content',
    maxw: '100%',
  }

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

<Flex style={flexMain}>
  <Heading as="h1" style={headerStyle}>Context is Everything</Heading>
</Flex>
<Flex style={flexStyle}>
  <Heading as="h2" style={h2Style}>Cases By Country:</Heading>
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
<Flex style={flexStyle}>
  <Heading as="h1" style={headerStyle}>Context is Everything</Heading>
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
