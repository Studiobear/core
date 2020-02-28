import { render } from '@testing-library/svelte'
import Footer from '../Footer.svelte'

describe('Footer', () => {
  test('should render component correctly', () => {
    const { getAllByText } = render(Footer)

    expect(getAllByText('Footer').length).toBe(3)
  })
})
