import { render } from '@testing-library/svelte'
import App from '../App.svelte'

describe('App', () => {
  test('should render component correctly', () => {
    const { getByText, getAllByText } = render(App)

    expect(getByText('Hello world!')).toBeInTheDocument()
    expect(getByText('Header')).toBeInTheDocument()
    expect(getAllByText('Footer').length).toBe(3)
  })
})
