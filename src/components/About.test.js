import React from 'react';
import {render, screen} from '@testing-library/react';
import About from './About';

describe('Test for Component About', () => {
test('Render text about', () => {
  render(<About />);
  const titleElement = screen.getByText(/The Rick and Morty API/i);
  expect(titleElement).toBeInTheDocument();
});
})


