import {fireEvent, render, screen} from '@testing-library/react'
import Link from "../../Atoms/Link/Link";
import FieldTxt from "./FieldTxt";

describe('Render and test FieldTxt', () => {
    test("Render link in FieldTxt", () => {
        let site = 'data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent("123")
        render(<Link data={{site}} downloadCheck={true}>Send</Link>)
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', "data:text/plain;charset=utf-8,%EF%BB%BF123");
    })
    test('render input from fieldtxt', () => {
        render(< FieldTxt/>);
        let input = screen.getByTestId('string-input');
        fireEvent.change(input, {target: {value: '123'}})
        expect(screen.getByDisplayValue('123')).toBeInTheDocument();
    })
})