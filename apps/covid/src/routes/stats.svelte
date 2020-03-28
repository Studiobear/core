<script>
  import { onMount } from 'svelte'
  import { styled } from '@studiobear/designspek'
  import { Flex, Box, Heading, Text } from '@studiobear/designspek-components'
  import sortObjectsArray from 'sort-objects-array'
  import { theme } from '../theme'

  import { fatalityRate, recoveryRate, C19Stats } from '../libs'
  import { Loading } from '../components'

  $: data = []
  let sortData
  let statsGlobal = []
  let total_deaths = 0
  let total_confirmed = 0
  let total_active = 0
  let total_recovered = 0
  let total_fatality_rate = 0
  let total_recovery_rate = 0
  let total_compare = 0
  let last_updated = 0
  let error = false
  let loading = true
  let sorted = ''
  let colSorted = 'active'
  // let url =
  //   'https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&outFields=Country_Region,Confirmed,Deaths,Recovered,Active&orderByFields=Confirmed%20desc'

  let url =
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
      tableLayout: 'fixed',
      whiteSpace: 'nowrap',
    },
    $theme,
  )

  $: tableGlobal = styled(
    {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      minw: '30rem',
    },
    $theme,
  )

  $: tableHeader = styled(
    {
      brdCol: 'transparent',
    },
    $theme,
  )
  $: th = styled(
    {
      pos: 'sticky',
      t: 0,
      color: $theme.colors.background,
      py: ['0.25rem', '0.25rem', '0.5rem', '0.75rem', '0.75rem'],
      pyx: ['0.5rem', '0.5rem', '0.75rem', '1rem', '1rem'],
      bg: $theme.colors.quaternary,
      txtAlign: 'center',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      verticalAlign: 'middle',
    },
    $theme,
  )

  $: thCountry = styled(
    {
      pos: 'sticky',
      t: 0,
      color: $theme.colors.background,
      py: ['0.25rem', '0.25rem', '0.5rem', '0.75rem', '0.75rem'],
      pyx: ['0.5rem', '0.5rem', '0.75rem', '1rem', '1rem'],
      bg: $theme.colors.quaternary,
      txtAlign: 'right',
      pr: '0.5rem',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      verticalAlign: 'middle',
    },
    $theme,
  )

  $: sticky = styled(
    {
      pos: 'sticky',
      t: ['1.6275rem', '1.6275rem', '2.125rem', '2.625rem', '2.625rem'],
      bg: $theme.colors.muted,
    },
    $theme,
  )

  $: tableData = styled(
    {
      w: 'auto',
    },
    $theme,
  )

  $: td = styled(
    {
      colors: $theme.colors.text,
      p: ['0.25rem', '0.25rem', '0.5rem', '0.75rem', '0.75rem'],
      wordBreak: 'break-word',
      txtAlign: 'center',
    },
    $theme,
  )

  $: tdCountry = styled(
    {
      colors: $theme.colors.text,
      p: ['0.25rem', '0.25rem', '0.5rem', '0.75rem', '0.75rem'],
      wordBreak: 'break-word',
      txtAlign: 'right',
      pr: '0.5rem',
    },
    $theme,
  )

  $: moreRecThanAct = styled(
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

  $: lowAvgRec = styled(
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

  $: tableError = styled(
    {
      ...td,
      py: '2rem',
      px: '4rem',
      bg: $theme.colors.lightYellow,
    },
    $theme,
  )
  $: tableLoading = styled(
    {
      ...td,
      p: '2rem',
      bg: $theme.colors.background,
      txtAlign: 'center',
    },
    $theme,
  )

  $: colCountry = styled({ w: '22%' }, $theme)
  $: colStat = styled({ w: '13%' }, $theme)

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

  $: loading = {
    animation: 'spin 6s infinite',
  }

  onMount(async () => {
    let combined = {}
    const resp = await fetch(url)
    let temp = await resp.json()
    if (temp.error) {
      error = true
      loading = false
    } else {
      let records = temp['features']
      statsGlobal = await C19Stats(records)
      await console.log('statsGlobal', resp, temp)
      total_confirmed = statsGlobal.totalConfirmed
      total_active = statsGlobal.totalActive
      total_recovered = statsGlobal.totalRecovered
      total_deaths = statsGlobal.totalDeaths
      total_fatality_rate = (total_deaths / total_confirmed) * 100
      total_recovery_rate = (total_recovered / total_confirmed) * 100
      last_updated = statsGlobal.lastUpdated

      sortData = sortBy => {
        let opts = sorted === 'desc' ? '' : 'desc'
        sorted = sorted === 'desc' ? '' : 'desc'
        switch (sortBy) {
          case 'country':
            colSorted = 'country'
            return (data = sortObjectsArray(statsGlobal.data, 'Name', opts))
            break
          case 'confirmed':
            colSorted = 'confirmed'
            return (data = sortObjectsArray(
              statsGlobal.data,
              'Confirmed',
              opts,
            ))
            break
          case 'recovered':
            colSorted = 'recovered'
            return (data = sortObjectsArray(
              statsGlobal.data,
              'Recovered',
              opts,
            ))
            break
          case 'deaths':
            colSorted = 'deaths'
            return (data = sortObjectsArray(statsGlobal.data, 'Deaths', opts))
            break
          default:
            colSorted = 'active'
            return (data = sortObjectsArray(statsGlobal.data, 'Active', opts))
        }
      }

      await sortData('active')
      loading = false
    }
  })
</script>

<Flex style={flexMain}>
  <Heading as="h1" style={headerStyle}>Context is Everything</Heading>
</Flex>
<Flex style={flexStyle}>
  <Heading as="h2" style={h2Style}>Cases By Country:</Heading>
  {#if !error && !loading}
    <Text style={{ txtAlign: 'center' }}>{last_updated}</Text>
  {/if}
  <Heading as="h4" style={h4Style}>Legend</Heading>
  <table class="{table} {legendBody}">
    <thead>
      <tr>
        <th class="{moreRecThanAct} {legendTh}">More Recovered than active</th>
        <th class="{lowAvgRec} {legendTh}">Lower Avg Recoveries</th>
        <th class="{highAvgFat} {legendTh}">Higher Avg Fatalities</th>
        <th class="{highRecov} {legendTh}">
          Higher Avg Recoveries OR Lower Avg Fatalities
        </th>
        <th class="{moreRec} {legendTh}">More Recovered than Active</th>
      </tr>
    </thead>
  </table>
  <Box style={tableContainer}>
    <table class={tableGlobal}>
      <colGroup>
        <col class={colCountry} />
        <col class={colStat} />
        <col class={colStat} />
        <col class={colStat} />
        <col class={colStat} />
        <col class={colStat} />
        <col class={colStat} />
      </colGroup>
      <thead class={tableHeader}>
        <tr>
          <th class={thCountry} on:click={() => sortData('country')}>
            Country Name
            <span>
              {#if colSorted === 'country'}
                {@html sorted === 'desc' ? '&nbsp;&dtrif;' : '&nbsp;&utrif;'}
              {:else}&nbsp;&nbsp;{/if}
            </span>
          </th>
          <th class={th} on:click={() => sortData('active')}>
            Active
            <span>
              {#if colSorted === 'active'}
                {@html sorted === 'desc' ? '&nbsp;&dtrif;' : '&nbsp;&utrif;'}
              {:else}&nbsp;&nbsp;{/if}
            </span>
          </th>
          <th class={th} on:click={() => sortData('confirmed')}>
            Confirmed
            <span>
              {#if colSorted === 'confirmed'}
                {@html sorted === 'desc' ? '&nbsp;&dtrif;' : '&nbsp;&utrif;'}
              {:else}&nbsp;&nbsp;{/if}
            </span>
          </th>
          <th class={th} on:click={() => sortData('fatality')}>
            Fatality Rate
            <span>
              {#if colSorted === 'fatality'}
                {@html sorted === 'desc' ? '&nbsp;&dtrif;' : '&nbsp;&utrif;'}
              {:else}&nbsp;&nbsp;{/if}
            </span>
          </th>
          <th class={th} on:click={() => sortData('recovery')}>
            Recovery Rate
            <span>
              {#if colSorted === 'recovery'}
                {@html sorted === 'desc' ? '&nbsp;&dtrif;' : '&nbsp;&utrif;'}
              {:else}&nbsp;&nbsp;{/if}
            </span>
          </th>
          <th class={th} on:click={() => sortData('recovered')}>
            Recovered
            <span>
              {#if colSorted === 'recovered'}
                {@html sorted === 'desc' ? '&nbsp;&dtrif;' : '&nbsp;&utrif;'}
              {:else}&nbsp;&nbsp;{/if}
            </span>
          </th>
          <th class={th} on:click={() => sortData('deaths')}>
            Deaths
            {#if colSorted === 'deaths'}
              {@html sorted === 'desc' ? '&nbsp;&dtrif;' : '&nbsp;&utrif;'}
            {:else}&nbsp;&nbsp;{/if}
          </th>
        </tr>
        {#if !error && !loading}
          <tr class={sticky}>
            <td class="{tdCountry} {sticky}">Global</td>
            <td
              class="{td}
              {sticky}
              {total_recovered > total_active && moreRecThanAct}">
              {total_active}
            </td>
            <td class="{td} {sticky}">{total_confirmed}</td>
            <td class="{td} {sticky}">{total_fatality_rate.toFixed(2)}%</td>
            <td class="{td} {sticky}">{total_recovery_rate.toFixed(2)}%</td>
            <td
              class="{td}
              {sticky}
              {total_recovered > total_active && moreRec}">
              {total_recovered}
            </td>
            <td class="{td} {sticky}">{total_deaths}</td>
          </tr>
        {/if}

      </thead>
      <tbody class={tableData}>
        {#if !error && loading}
          <tr>
            <td class={td}>&nbsp;</td>
            <td class={td}>&nbsp;</td>
            <td colspan="3" class={tableLoading}>
              <Loading
                theme={$theme}
                fill={$theme.colors.secondary}
                style={loading} />
            </td>
            <td class={td}>&nbsp;</td>
            <td class={td}>&nbsp;</td>
          </tr>
        {/if}
        {#if error && !loading}
          <tr>
            <td colspan="7" class={tableError}>
              We're sorry, the data wasn't able to be loaded at this time.
            </td>
          </tr>
        {/if}
        {#if !error && !loading}
          {#each Object.keys(data) as item}
            <tr
              class={data[item]['Recovered'] > data[item]['Active'] && moreRecThanAct}>
              <td class={tdCountry}>
                {String(JSON.stringify(data[item]['Name'])).replace(/"/g, '')}
              </td>
              <td class={td}>{JSON.stringify(data[item]['Active'])}</td>
              <td class={td}>{JSON.stringify(data[item]['Confirmed'])}</td>
              <td
                class="{td}
                {fatalityRate(data[item]) > total_fatality_rate && highAvgFat}
                {fatalityRate(data[item]) < total_fatality_rate && highRecov}">
                {fatalityRate(data[item]).toFixed(2)}%
              </td>
              <td
                class="{td}
                {recoveryRate(data[item]) < total_recovery_rate && lowAvgRec}
                {recoveryRate(data[item]) > total_recovery_rate && highRecov}">
                {recoveryRate(data[item]).toFixed(2)}%
              </td>
              <td class={td}>{JSON.stringify(data[item]['Recovered'])}</td>
              <td class={td}>{JSON.stringify(data[item]['Deaths'])}</td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </Box>
</Flex>
