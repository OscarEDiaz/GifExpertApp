import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas sobre componente principal', () => {
    test('Debe de añadir una categoría si no existe', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Berserk' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'LOL' } });
        fireEvent.submit(form);

        // Test con imagenes (asíncrono, puede llegar a complicarse)
        // await waitFor(() => expect( expect( screen.getAllByRole('img').length ).toBeGreaterThan(0)))

        // expect( screen.getAllByRole('img').length ).toBe(20);

        // Test con elementos síncronos como el texto
        screen.debug();
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(2);
    })

    test('No debe de añadir una categoría si existe', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Berserk' } });
        fireEvent.submit(form);
  
        fireEvent.input(input, { target: { value: 'Berserk' } });
        fireEvent.submit(form);

        // Implementación con las imágenes, problemas complicados
        // await waitFor(
        //     () => expect( expect( screen.getAllByRole('img').length ).toBeGreaterThan(0))
        // )
        
        // fireEvent.input(input, { target: { value: 'Berserk' } });
        // fireEvent.submit(form);
        
        // await waitFor(
        //     () => expect( expect( screen.getAllByRole('img').length ).toBe(20)),
        // )
        
        // expect( screen.getAllByRole('img').length ).toBe(20);

        // Implementación con texto
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(1);
    })
})