const { renderHook, waitFor } = require("@testing-library/react")
const { useFetchGifs } = require("../../src/hooks/useFetchGifs")

describe('Pruebas en useFetchGifs: customHook', () => {
    test('Debe de retornar un arreglo de imagenes y el booleano en falso', () => {
        const { result } = renderHook(() => useFetchGifs('Berserk'));
        
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    })
    
    test('Debe de retornar imagenes y cambiar el booleano', async () => {
        const { result } = renderHook(() => useFetchGifs('Berserk'));
        
        await waitFor(() => expect( result.current.images.length ).toBeGreaterThan(0))
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    })
})