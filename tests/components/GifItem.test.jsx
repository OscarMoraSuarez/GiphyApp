import {  render, screen } from "@testing-library/react"
import { checkPropTypes } from "prop-types"
import { GifItem } from "../../src/components"


describe('pruebas en <GifItem/>', () => {  
     
    const url='https://cualquiercosa/';
    const title='raJSo'
    test('debe hacer juego con el snapshot', () => { 

        const{ container } = render(<GifItem url={url} title={title} />)
        

        expect(container).toMatchSnapshot();

     })

     test('debe msotrar la imagen con  el url u el title indicado', () => { 
        
         render(<GifItem url={url} title={title}/>)
        //  screen.debug();
        //  expect(screen.getByRole('img').src).toBe(url);
        //  expect(screen.getByRole('img').alt).toBe(title);
        const {src,alt}=screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    })
    test('Debe mostrar el titulo en el componente', () => { 
        render(<GifItem url={url} title={title} />)
        expect(screen.getByText(title)).toBeTruthy();

     })


})