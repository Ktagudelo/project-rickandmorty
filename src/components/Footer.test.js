import React from 'react';
import {render, screen} from '@testing-library/react';
import Footer from './Footer';

describe('Test for Component Footer', () => {
test('Render text footer', () => {
  render(<Footer />);
  const titleElement = screen.getByText(/Copyright/i);
  expect(titleElement).toBeInTheDocument();
});
})
