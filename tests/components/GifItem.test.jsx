import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en componente GifItem', () => {
    const title = "TEST";
    const url = "https://hola.com/test.jpg"

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen con el URL y ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de renderizar el título', () => {
        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    })
})