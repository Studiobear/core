import { render } from '@testing-library/svelte'
import App from '../App.svelte'

describe('App', () => {
  test('should render component correctly', () => {
    const { getByText } = render(App)

    expect(getByText('Hello world!')).toBeInTheDocument()
    expect(getByText('header')).toBeInTheDocument()
    expect(getByText('footer')).toBeInTheDocument()
  })
})
