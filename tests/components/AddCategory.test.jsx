const { render, fireEvent, screen } = require("@testing-library/react")
const { AddCategory } = require("../../src/components")

describe('Pruebas en componente <AddCategory />', () => {
    test('Debe de cambiar el valor del texto del input', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: 'Berserk' } });
        
        expect( input.value ).toBe('Berserk');
    })
    
    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Berserk' } });
        fireEvent.submit(form);

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith('Berserk');
    })

    test('No debe de llarmarse la función onNewCategory cuando no se tiene un valor', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    })
})