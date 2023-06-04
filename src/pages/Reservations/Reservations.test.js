import React from 'react';
import { render, screen } from '@testing-library/react';
import Reservations from './Reservations.tsx';

describe('Renders reservation component correctly', () => {
  test('renders reservations', () => {
    render(<Reservations />);
    const intro = screen.getByText(/Thank you for booking with us!/i);
    expect(intro).toBeInTheDocument();
  });
});
