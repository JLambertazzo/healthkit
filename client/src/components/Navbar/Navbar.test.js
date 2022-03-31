import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

test('Tests run', () => {
    render(<Navbar />, {
        wrapper: BrowserRouter
    });
    const linkElement = screen.getByText(/Health Kit/i);
    expect(linkElement).toBeInTheDocument();
  });
  