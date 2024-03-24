import { render, screen } from '@testing-library/react';
import App from '../App.js';

jest.mock('../pages/homePage/HomePage.jsx', () => () => <div>HomePage</div>);

describe('App', () => {
  it('renders app without throwing', () => {
    render(<App />);
  });

  it('renders home page route without throwing', () => {
    render(<App />);
    expect(screen.getByText('HomePage')).toBeInTheDocument();
  });
});

//When the app is first loaded, the App and homescreen is rendered.