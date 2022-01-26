import {render, screen} from '@testing-library/react';
import Link from "./Link";


const testLink = {
    google: {
        site: "https://google.com/",
    }
}

describe("Test render Link", () => {
    test("Render link without site", () => {
        render(<Link/>)
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', "#");
    })
    test('Render link with site', () => {
        render(<Link data={testLink.google}/>)
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', 'https://google.com/')
    })
    test('Render link with uncorrected site', () => {
        render(<Link data={testLink}/>)
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', "#")
    })
    test('Render link with paragraph', () => {
        render(<Link data={testLink.google}>
            <p>Link text</p>
        </Link>)
        let link = screen.getByRole('link')
        let text = screen.getByText(/Link text/i)
        expect(link).toHaveAttribute('href', 'https://google.com/')
        expect(text).toBeInTheDocument();
    })
    test('Render link with the other components', () => {
        render(<Link data={testLink.google}>
            <p>Link text</p>
            <img src={"https://123.com/"} alt={"photoUser"}/>
            <p>The Other Link Txt</p>
        </Link>)
        let link = screen.getByRole('link')
        let text = screen.getByText(/Link text/i)
        let textTheOther = screen.getByText(/the other link Txt/i)
        let img = screen.getByRole("img");
        expect(textTheOther).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('alt', 'photoUser')
        expect(link).toHaveAttribute('href', 'https://google.com/')
        expect(text).toBeInTheDocument();
    })
})