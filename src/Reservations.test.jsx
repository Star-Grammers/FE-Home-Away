import React from 'react';
import { render, screen } from '@testing-library/react';
import Reservations from './Reservation.tsx';

describe('Renders reservation component correctly', () => {
  test('renders reservation', () => {
    render(<Reservations />);
    const helloText = screen.getByText(/hello/i);
    expect(helloText).toBeInTheDocument();
  });
});
