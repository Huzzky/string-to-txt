import { render, screen } from '@testing-library/react';
import Footer from "./Footer";

describe('render in Footer.jsx', ()=> {
    test('render Link', ()=> {
        render(<Footer/>);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'https://github.com/Huzzky')
    })
    test('render img', () => {
        render(<Footer/>);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', './logos/github-logo.svg');
        expect(logo).toHaveAttribute('alt', 'github-logo')
    });

})
