// import { render, screen } from '@testing-library/react';
// import Character from './Character';

// test('Render title home', () => {
// //   const {match.params.id} = 1;  
//   render(<Character match={match.params.id} />);
//   const titleElement = screen.getAllByTestId('character-details');
//   expect(titleElement).toHaveTextContent(1);
// });

// test('Render test description character', () => {
//   render(<Character />);
//   const titleElement = screen.getByText(/Name/i);
//   expect(titleElement).toBeInTheDocument();
// });

// import React from 'react';
// import {render} from '@testing-library/react';
// import Character from './Character';

// describe('Test for App', () => {
//   test('Test Rendering', () => {
//     const {getByTestId} = render(<Character />)
//     expect(getByTestId('content')).toBeInTheDocument()
//   })
// })