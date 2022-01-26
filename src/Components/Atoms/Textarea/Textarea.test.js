import {fireEvent, render, screen} from '@testing-library/react'
import Textarea from "./Textarea";


describe('Render and test Textarea', () => {
    let handleClick = jest.fn()

    test('render Textarea and test value', () => {
        render(< Textarea setStringFunc={handleClick}/>);
        let input = screen.getByTestId('string-input');
        fireEvent.change(input, {target: {value: '123'}})
        expect(screen.getByDisplayValue('123')).toBeInTheDocument();
    })

    test('render Textarea and test CLICK', () => {
        render(< Textarea setStringFunc={handleClick}/>);
        let input = screen.getByTestId('string-input');
        fireEvent.change(input, {target: {value: '123'}})
        expect(handleClick).toHaveBeenCalledTimes(1)

    })
})
