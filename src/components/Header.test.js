import {render, screen} from '@testing-library/react'
import React from 'react'
import {MemoryRouter} from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import Header from './Header'

test('full header rendering/navigating', () => {
    render(<Header />, {wrapper: MemoryRouter})
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument()
    expect(screen.getByText(/About/i)).toBeInTheDocument()
})