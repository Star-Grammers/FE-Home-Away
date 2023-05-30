import React from 'react';
import { render, screen } from '@testing-library/react';
import Reservations from './Reservations.tsx';

describe('Renders reservation component correctly', () => {
  test('renders reservations', () => {
    render(<Reservations />);
    const helloText = screen.getByText(/hello/i);
    expect(helloText).toBeInTheDocument();
  });
});
