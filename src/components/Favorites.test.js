import React from 'react';
import {render, screen} from '@testing-library/react';
import Favorites from './Favorites';

describe('Test for Component Favorites', () => {
test('Render text favorites', () => {
  render(<Favorites />);
  const titleElement = screen.getByText(/Favorites/i);
  expect(titleElement).toBeInTheDocument();
});
})
