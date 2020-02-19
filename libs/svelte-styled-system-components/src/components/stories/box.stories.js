import { action } from '@storybook/addon-actions'

import Box from '../Box.svelte'

export default {
  title: 'Box',
  component: Box,
}

export const Text = () => ({
  Component: Box,
  props: { text: 'Hello Button' },
  on: { click: action('clicked') },
})
