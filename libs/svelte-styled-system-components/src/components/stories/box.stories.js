import { action } from '@storybook/addon-actions'

import Box from '../Box.svelte'
import BoxView from './views/boxView.svelte'
import BoxViewFlex from './views/boxViewFlex.svelte'

import { basic } from '../../theme'

export default {
  title: 'Box',
  component: Box,
}

export const noContent = () => ({
  Component: Box,
})

export const withText = () => ({
  Component: BoxView,
  props: {
    boxText: 'Hi!!!',
  },
})

export const withBackground = () => ({
  Component: BoxView,
  props: {
    style: {
      bg: 'primary',
      p: [5, 3, 1],
      m: [5, 0, 1],
      color: 'muted',
      brd: `3px solid`,
      brdcol: `secondary`,
      _hover: { bg: 'secondary' },
      _after: {
        content: '"→"',
        pl: '20px',
      },
      fontFamily: 'heading',
    },
    boxText: 'Box with theme primary color background',
    role: 'header',
  },
})

export const withColorPrimary = () => ({
  Component: BoxView,
  props: {
    style: {
      color: 'primary',
    },
    boxText: 'Box with theme primary color text',
  },
})

export const withColorSecondary = () => ({
  Component: BoxView,
  props: {
    style: {
      color: 'secondary',
    },
    boxText: 'Box with theme secondary color text',
  },
})

export const withPaddingLarge = () => ({
  Component: BoxView,
  props: {
    style: {
      p: 4,
    },
    boxText: 'Box with large padding',
  },
})

export const withBorder = () => ({
  Component: BoxView,
  props: {
    style: {
      p: 4,
      brd: `1px solid`,
      brdCol: 'primary',
    },
    boxText: 'Box with border',
  },
})

export const withDisplayBlock = () => ({
  Component: BoxViewFlex,
  props: {
    style: { p: 4, brd: '1px solid', brdCol: 'primary' },
    style1: { p: 4, brd: '1px solid', brdCol: 'primary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'primary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'primary' },
    boxText1: 'Just nested',
    boxText2: 'but not using flex;',
    boxText3: 'default displays as "block"',
  },
})

export const withDisplayInline = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      display: 'inline',
    },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      display: 'inline',
    },
    style3: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      display: 'inline',
    },
    boxText1: 'Just nested',
    boxText2: 'but not using flex;',
    boxText3: 'set to display as "inline"',
  },
})

export const withFlex = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: 'Nested',
    boxText2: 'in parent',
    boxText3: 'using flex',
  },
})

export const withFlexColumn = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexdir: 'column',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: Nested',
    boxText2: '2: in flex parent',
    boxText3: '3: flex-direction: column',
  },
})

export const withFlexRowReverse = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexdir: 'row-reverse',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: Nested',
    boxText2: '2: in flex parent',
    boxText3: '3: flex-direction: row-reverse',
  },
})

export const withFlexOrder = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexdir: 'column',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      ord: '1',
    },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      ord: '2',
    },
    style3: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      ord: '0',
    },
    boxText1: '1: Nested (order: 1)',
    boxText2: '2: in flex parent (order: 2)',
    boxText3: '3: using order (order: 0) ',
  },
})

export const withFlexGrow = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexdir: 'row',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      flexGrow: '2',
    },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: normal',
    boxText2: '2: I am sooo big',
    boxText3: '3: normal',
  },
})

export const withFlexShrink = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexdir: 'row',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      flexshr: '2',
    },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1:
      '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    boxText2: '2: I AM SHRUNK-ED. Lorem ipsum dolor sit amet...',
    boxText3:
      '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
})

export const withFlexBasis = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexdir: 'row',
    },
    style1: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style2: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      flexbas: '50%',
    },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1:
      '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    boxText2: '2: I AM THE BASIS. Lorem ipsum dolor sit amet...',
    boxText3:
      '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
})

export const withAlignItemsAndSelf = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexdir: 'column',
      align: 'center',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      slf: 'flex-end',
    },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: I want to be different',
    boxText2: '2: just a box',
    boxText3: '3: just a box',
  },
})

export const withFlexWrap = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexWrap: 'wrap',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
    },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boxText2: '2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boxText3:
      '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
})

export const withJustifySpaceBetween = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 4,
      brd: '1px solid',
      brdCol: 'primary',
      d: 'flex',
      flexdir: 'row',
      justC: 'space-between',
    },
    style1: {
      p: 4,
      brd: '1px solid',
      brdCol: 'secondary',
      slf: 'flex-end',
    },
    style2: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    style3: { p: 4, brd: '1px solid', brdCol: 'secondary' },
    boxText1: '1: Stay',
    boxText2: '2: away',
    boxText3: '3: from me',
  },
})
