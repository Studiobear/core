<script>
  import {
    Table,
    THead,
    TBody,
    TR,
    TD,
    Box,
  } from '@studiobear/designspek-components'

  export let theme = $$props.theme || {}

  let tableContainer = {
    overflowX: 'scroll',
    h: '25rem',
    overflow: 'auto',
    maxw: '100vw',
    w: '100%',
  }

  $: tableGlobal = { minw: '30rem' }
  $: colCountry = { w: '22%' }
  $: colStat = { w: '13%' }

  $: tableHeader = { brdCol: 'transparent' }
  $: th = {
    pos: 'sticky',
    t: 0,
    color: $theme.colors.background,
    p: ['0.25rem', '0.25rem', '0.5rem', '0.75rem', '0.75rem'],
    bg: $theme.colors.quaternary,
    txtAlign: 'center',
  }
</script>

<Box style={tableContainer}>
  <Table fixed style={tableGlobal}>
    <THead as="colGroup">
      <col style={colCountry} />
      <col style={colStat} />
      <col style={colStat} />
      <col style={colStat} />
      <col style={colStat} />
      <col style={colStat} />
      <col style={colStat} />
    </THead>
    <THead as="thead" class={tableHeader}>
      <TR>
        <THead class={thCountry} on:click={() => sortData('country')}>
          Country Name
        </THead>
        <THead style={th} on:click={() => sortData('active')}>Active</THead>
        <THead style={th} on:click={() => sortData('confirmed')}>
          Confirmed
        </THead>
        <THead style={th} on:click={() => sortData('fatality')}>
          Fatality Rate
        </THead>
        <THead style={th} on:click={() => sortData('recovery')}>
          Recovery Rate
        </THead>
        <THead style={th} on:click={() => sortData('recovered')}>
          Recovered
        </THead>
        <THead style={th} on:click={() => sortData('deaths')}>Deaths</THead>
      </TR>
    </THead>
    <TBody class={tableData}>
      {#each Object.keys(data) as item}
        <tr>
          <td class={tdCountry}>
            {String(JSON.stringify(data[item]['Name'])).replace(/"/g, '')}
          </td>
          <td
            class="{td}
            {data[item]['Recovered'] < data[item]['Active'] && moreActThanRec}">
            {JSON.stringify(data[item]['Active'])}
          </td>
          <td class={td}>{JSON.stringify(data[item]['Confirmed'])}</td>
          <td
            class="{td}
            {fatalityRate(data[item]) > total_fatality_rate && highAvgFat}
            {fatalityRate(data[item]) < total_fatality_rate && lowAvgFat}">
            {fatalityRate(data[item]).toFixed(2)}%
          </td>
          <td
            class="{td}
            {recoveryRate(data[item]) < total_recovery_rate && moreRec}
            {recoveryRate(data[item]) > total_recovery_rate && highRecov}">
            {recoveryRate(data[item]).toFixed(2)}%
          </td>
          <td
            class="{td}
            {data[item]['Recovered'] > data[item]['Active'] && moreRec}">
            {JSON.stringify(data[item]['Recovered'])}
          </td>
          <td class={td}>{JSON.stringify(data[item]['Deaths'])}</td>
        </tr>
      {/each}
    </TBody>
  </Table>
</Box>
