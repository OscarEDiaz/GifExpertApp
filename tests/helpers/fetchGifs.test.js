import { fetchGifs } from "../../src/helpers/fetchGifs"

describe('Pruebas en helper fetchGifs.js', () => {
    const category = 'Berserk';

    test('Debe retornar un arreglo de imagenes', async () => {
        const gifs = await fetchGifs(category);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})