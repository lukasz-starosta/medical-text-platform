import { render, fireEvent, screen } from '@testing-library/react'
import LoginForm from './LoginForm'

describe('Tests of LoginForm component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })
  it('renders errors when inputs are empty', async () => {
    render(<LoginForm />)

    fireEvent.click(screen.getByText('Zaloguj'))

    expect(await screen.findByText('Wpisz nazwę użytkownika')).toBeInTheDocument()
    expect(await screen.findByText('Wpisz hasło')).toBeInTheDocument()
  })
  it('example', async () => {
    expect(1).toEqual(1)
  })
})
