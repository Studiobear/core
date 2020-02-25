import { action } from '@storybook/addon-actions'

import GridView from './views/gridView.svelte'

export default {
  title: 'Grid',
  component: GridView,
}

export const withGrid = () => ({
  Component: GridView,
  props: {
    container: true,
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style4: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    gridText1: 'This',
    gridText2: 'uses',
    gridText3: 'CSS',
    gridText4: 'Grid',
  },
})
