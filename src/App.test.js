import {render, screen} from '@testing-library/react';

import App from "./App";

describe('render in App.jsx', () => {
    test("render App", () => {
        render(<App/>)
        const txtInHeader = screen.getByText(/Your string to .txt/i);
        const logo = screen.getByRole('img');
        expect(txtInHeader).toBeInTheDocument();
        expect(logo).toHaveAttribute('alt', 'github-logo');

    });


})
