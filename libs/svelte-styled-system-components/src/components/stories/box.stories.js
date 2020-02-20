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
      bg: 'colors.primary',
    },
    boxText: 'Box with theme primary color background',
  },
})

export const withColorPrimary = () => ({
  Component: BoxView,
  props: {
    style: {
      color: 'colors.primary',
    },
    boxText: 'Box with theme primary color text',
  },
})

export const withColorSecondary = () => ({
  Component: BoxView,
  props: {
    style: {
      color: 'colors.secondary',
    },
    boxText: 'Box with theme secondary colortext',
  },
})

export const withPaddingLarge = () => ({
  Component: BoxView,
  props: {
    style: {
      p: 'space.l',
    },
    boxText: 'Box with large padding',
  },
})

export const withBorder = () => ({
  Component: BoxView,
  props: {
    style: {
      p: 'space.l',
      brd: `1px solid ${basic.colors.primary}`,
    },
    boxText: 'Box with border',
  },
})

export const withNoFlex = () => ({
  Component: BoxViewFlex,
  props: {
    style: { p: 'space.l', brd: `1px solid ${basic.colors.primary}` },
    style1: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    style2: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    style3: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    boxText1: 'Just nested',
    boxText2: 'but not',
    boxText3: 'using flex',
  },
})

export const withFlex = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 'space.l',
      brd: `1px solid ${basic.colors.primary}`,
      d: 'flex',
    },
    style1: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    style2: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    style3: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    boxText1: 'Nested',
    boxText2: 'in parent',
    boxText3: 'using flex',
  },
})

export const withFlexColumn = () => ({
  Component: BoxViewFlex,
  props: {
    style: {
      p: 'space.l',
      brd: `1px solid ${basic.colors.primary}`,
      d: 'flex',
      flexdir: 'column',
    },
    style1: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    style2: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    style3: { p: 'space.l', brd: `1px solid ${basic.colors.secondary}` },
    boxText1: 'Nested',
    boxText2: 'in flex parent',
    boxText3: 'flex-direction: column',
  },
})
