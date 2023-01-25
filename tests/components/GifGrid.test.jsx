const { render, screen } = require("@testing-library/react")

const { GifGrid } = require("../../src/components");

const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'Berserk';

    test('Debe de mostrar el mensaje de carga al iniciar la aplicación', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category } />);

        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText(category) ).toBeTruthy();
    })

    test('Debe de mostrar imagenes', () => {
        const images = [
            {
                id: 1,
                title: 'Berserk',
                url: 'https://test.com/test.jpg'
            },
            {
                id: 2,
                title: 'Demon Slayer',
                url: 'https://test.com/test.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: images,
            isLoading: false
        })

        render(<GifGrid category={ category } />);

        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})