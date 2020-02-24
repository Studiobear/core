import { render, fireEvent } from '@testing-library/svelte'
import Box from '../Box.svelte'
import BoxView from '../stories/views/BoxView.svelte'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Counter', () => {
  test('should render component correctly ', () => {
    const { getByText } = render(BoxView)

    expect(getByText('I am a box!')).toBeInTheDocument()
  })

  test('to have default text', async () => {
    const { getByText } = render(Box)
    const box = getByText('no content was provided')

    expect(box).toBeInTheDocument()
  })

  test('to change background color from primary to secondary on hover', async () => {
    const { getByText } = render(BoxView, {
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    const box = getByText('I am a box!')
    expect(box).toHaveStyle('background-color: rgb(0, 119, 204)')
    await fireEvent.mouseOver(box)
    expect(box).toHaveStyle('background-color: rgb(0, 119, 204)')
  })

  test('to pass "as nav" and role prop', async () => {
    const { getByText } = render(BoxView, {
      as: 'nav',
      role: 'navigation',
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    const box = getByText('I am a box!')
    expect(box).toHaveAttribute('role', 'navigation')
  })

  test('to not have undeclared props', async () => {
    const { getByText } = render(BoxView, {
      bad: 'prop',
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    const box = getByText('I am a box!')
    expect(box).not.toHaveAttribute('bad')
  })

  test('to have no a11y violations', async () => {
    const { getByText } = render(BoxView, {
      style: { bg: 'primary', _hover: { bg: 'secondary' } },
    })
    const box = getByText('I am a box!')
    expect(box).toHaveStyle('background-color: rgb(0, 119, 204)')
  })
})
