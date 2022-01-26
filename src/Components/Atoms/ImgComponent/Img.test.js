import {render, screen} from '@testing-library/react'
import Img from "./Img";


const dataImg = {
    data: {
        logo: "./logos/github-logo.svg",
        alt: "github-logo"
    }
}

const dataImgDefect = {
    data: {
        logo: "./logos/ghub-logo.svg",
        alt: "github-logo"
    }
}

const dataWithoutLogo = {
    data: {
        logo: "",
        alt: "github-logo"
    }
}

const dataWithoutAlt = {
    data: {
        logo: "./logos/github-logo.svg",
        alt: ""
    }
}

const dataWithoutAll = {
    data: {
        logo: "",
        alt: ""
    }
}
describe('Render and test Img', () => {
    test('render Img with normal data', () => {
        render(<Img data={dataImg.data} className={"img"}/>);
        let img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', './logos/github-logo.svg');
        expect(img).toHaveAttribute('alt', 'github-logo');
    })
    test('render Img with defect logo data', () => {
        render(<Img data={dataImgDefect.data} className={"img"}/>);
        let img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', './logos/ghub-logo.svg');
        expect(img).toHaveAttribute('alt', 'github-logo');

    })
    test('render Img without logo in data', () => {
        render(<Img data={dataWithoutLogo.data} className={"img"}/>);
        let img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', './logos/error404img.svg');
        expect(img).toHaveAttribute('alt', 'Img 404 error');

    })
    test('render Img without alt in data', () => {
        render(<Img data={dataWithoutAlt.data} className={"img"}/>);
        let img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', './logos/github-logo.svg');
        expect(img).toHaveAttribute('alt', 'logo');

    })
    test('render Img without logo and alt in data', () => {
        render(<Img data={dataWithoutAll.data} className={"img"}/>);
        let img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', './logos/error404img.svg');
        expect(img).toHaveAttribute('alt', 'Img 404 error');

    })
})