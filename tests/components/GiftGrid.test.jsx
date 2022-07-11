import { getAllByRole, render,screen } from "@testing-library/react"
import { GiftGrid } from "../../src/components/GiftGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');//con esto le digo que haga un mock completo del path que le paso

describe('pruebas en GiftGrid ', () => { 
    const  category='One Punch';

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images:[], //mientras no hay imagenes isloading es true
            isLoading:true
        });

        render(<GiftGrid category={category}/>);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     })

     test('deb mostrar items cuando se Cargan las imagenes mediante useFetchGifs', () => { 
        const gifs=[ //el useState le da valor a images con newImages y el isloading cambia a false
            {
                id:'Abc',
                title:'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            {
                id: 'Abd',
                title: 'Goku',
                url: 'https://localhost/Goku.jpg'
            }
               
        ]

         useFetchGifs.mockReturnValue({
             images: gifs,
             isLoading: false
         });
        render(<GiftGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

      })    


})