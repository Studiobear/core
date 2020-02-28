import { render } from '@testing-library/svelte'
import Header from '../Header.svelte'

describe('Header', () => {
  test('should render component correctly', () => {
    const { getByText } = render(Header)

    expect(getByText('Header')).toBeInTheDocument()
  })
})
