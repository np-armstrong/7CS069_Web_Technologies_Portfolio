import React from 'react';
import { render, screen } from '@testing-library/react';
import CancelModal from '../CancelModal.jsx';

//!! Basic smoke test to check if the CancelModal component renders !!//
describe('CancelModal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<CancelModal />, div);
  });
});
