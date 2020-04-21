import { render } from '@testing-library/svelte'
import App from '../App.svelte'

describe('App', () => {
  test('should render component correctly', () => {
    const { getByText, getAllByText } = render(App)

    expect(getByText('Duly Listed')).toBeInTheDocument()
    expect(getByText('To Do? To Remember? To Share?')).toBeInTheDocument()
    expect(getAllByText('Footer').length).toBe(3)
  })
})
