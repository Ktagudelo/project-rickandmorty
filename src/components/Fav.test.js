import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Fav from './Fav';

describe('Test for Component Fav', () => {
    test('onClick Favoritos', () => {
        const {getByTestId} = render(<Fav />)
        const button = getByTestId('Button')
        expect(button.textContent).toBe('')
        fireEvent.click(button)
    
      })
});
