import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingTile from '../BookingTile.jsx';

//!! Basic smoke test to check if the BookingTile component renders !!//
describe('BookingTile', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<BookingTile />, div);
  });
});
