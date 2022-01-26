import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header'

test('render Header text', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Your string to .txt/i);
    expect(linkElement).toBeInTheDocument();
});
