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
    pt: '4rem',
    maxw: '100vw',
  }
  $: flexStyle = {
    flexdir: 'column',
    mt: '0.5rem',
    maxw: '100vw',
    pb: '3rem',
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

  $: h4Style = {
    lineHeight: '2rem',
    fontWeight: 700,
    textTran: 'uppercase',
    textAlign: 'center',
    px: '1rem',
    mt: '0.5rem',
  }

  let tableContainer = {
    overflowX: 'scroll',
    h: '25rem',
    overflow: 'auto',
    maxw: '100vw',
    w: '100%',
  }
  $: table = styled(
    {
      borderCollapse: 'collapse',
    },
    $theme,
  )

  $: tableHeader = styled(
    {
      pos: 'sticky',
      t: 0,
      d: 'table-caption',
      bg: $theme.colors.quaternary,
    },
    $theme,
  )
  $: th = styled(
    {
      color: $theme.colors.background,
      p: ['0.25rem', '0.25rem', '0.5rem', '0.75rem', '0.75rem'],
    },
    $theme,
  )

  $: tableData = styled(
    {
      w: '100%',
    },
    $theme,
  )

  $: td = styled(
    {
      colors: $theme.colors.text,
      p: ['0.25rem', '0.25rem', '0.5rem', '0.75rem', '0.75rem'],
    },
    $theme,
  )

  $: moreActThanRec = styled(
    {
      ...td,
      bg: $theme.colors.lightBlue,
    },
    $theme,
  )

  $: moreRec = styled(
    {
      ...td,
      bg: $theme.colors.lightPurple,
    },
    $theme,
  )

  $: highAvgFat = styled(
    {
      ...td,
      bg: $theme.colors.lightRed,
    },
    $theme,
  )

  $: lowAvgFat = styled(
    {
      ...td,
      bg: $theme.colors.lightYellow,
    },
    $theme,
  )

  $: highRecov = styled(
    {
      ...td,
      bg: $theme.colors.lightGreen,
    },
    $theme,
  )

  $: legendBody = styled(
    { w: ['100%', '100%', 'auto', 'auto', 'auto'] },
    $theme,
  )
  $: legendTh = styled(
    {
      ...td,
      display: ['block', 'block', 'table-cell', 'table-cell', 'table-cell'],
      fontSize: '0.8rem',
      color: $theme.colors.text,
      px: ['0.75rem', '0.75rem', '0.5rem', '0.5rem', '0.5rem'],
      py: ['0.25rem', '0.25rem', '0.5rem', '0.5rem', '0.5rem'],
      textAlign: 'center',
    },
    $theme,
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

<Flex style={flexMain}>
  <Heading as="h1" style={headerStyle}>Context is Everything</Heading>
</Flex>
<Flex style={flexStyle}>
  <Heading as="h2" style={h2Style}>Cases By Country:</Heading>
  <Heading as="h4" style={h4Style}>Legend</Heading>
  <table class="{table} {legendBody}">
    <thead>
      <tr>
        <th class="{highAvgFat} {legendTh}">Higher Avg Fatalities</th>
        <th class="{lowAvgFat} {legendTh}">Lower Avg Recoveries</th>
        <th class="{highRecov} {legendTh}">
          Higher Avg Recoveries OR Lower Avg Fatalities
        </th>
        <th class="{moreActThanRec} {legendTh}">More Active than Recovered</th>
        <th class="{moreRec} {legendTh}">More Recovered than Active</th>
      </tr>
    </thead>
  </table>
  <Box style={tableContainer}>
    <table class={table}>
      <thead class={tableHeader}>
        <tr>
          <th class={th}>Country Name</th>
          <th class={th}>Active</th>
          <th class={th}>Confirmed</th>

          <th class={th}>Recovered</th>
          <th class={th}>Deaths</th>
          <th class={th}>Fatality Rate</th>
          <th class={th}>Recovery Rate</th>
        </tr>
      </thead>
      <tbody class={tableData}>
        {#each Object.keys(data) as item}
          <tr>
            <td class={td}>{String(JSON.stringify(item)).replace(/"/g, '')}</td>
            <td
              class={data[item]['Recovered'] < data[item]['Active'] ? moreActThanRec : td}>
              {JSON.stringify(data[item]['Active'])}
            </td>
            <td>{JSON.stringify(data[item]['Confirmed'])}</td>
            <td
              class={data[item]['Recovered'] > data[item]['Active'] ? moreRec : td}>
              {JSON.stringify(data[item]['Recovered'])}
            </td>
            <td>{JSON.stringify(data[item]['Deaths'])}</td>
            <td
              class="{fatalityRate(data[item]) > total_fatality_rate ? highAvgFat : ''}
              {fatalityRate(data[item]) < total_fatality_rate ? lowAvgFat : td}">
              {fatalityRate(data[item]).toFixed(2)}%
            </td>
            <td
              class="{recoveryRate(data[item]) < total_recovery_rate ? moreRec : ''}
              {recoveryRate(data[item]) > total_recovery_rate ? highRecov : td}">
              {recoveryRate(data[item]).toFixed(2)}%
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Box>
</Flex>
