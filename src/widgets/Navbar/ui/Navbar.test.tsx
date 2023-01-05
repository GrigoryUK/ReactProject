import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  test('with only first param', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })
})
