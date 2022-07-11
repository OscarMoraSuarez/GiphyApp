import { render,screen,fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en AddCategory', () => { 


    test('Debe cambiar  el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={()=>{}} />);
        const input=screen.getByRole('textbox'); //capturo el input
        //disparo el evento input como si la persoan ingresara valores
        fireEvent.input(input,{target:{value:'Saitama'} });
        // screen.debug();
        expect(input.value).toBe('Saitama');
     })
     
     test('debe llamar onNewCategory si el input tiene un valor', () => { 
         
        const inputValue   ='Saitama';
        const onNewCategory=jest.fn();/* este es el mock de una funcion...simula una funcion */
         render(<AddCategory onNewCategory={ onNewCategory }/>);

         const input=screen.getByRole('textbox');
         const form=screen.getByRole('form');
         fireEvent.input(input, { target: { value:inputValue}});    
         fireEvent.submit(form);
        //  screen.debug();
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled( );
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
      })

      test('no debe llamar onNewCategory si el input está vacio', () => { 
          
          const onNewCategory = jest.fn();  
          render(<AddCategory onNewCategory={onNewCategory} />);     
          const form = screen.getByRole('form');
          fireEvent.submit(form);
          expect(onNewCategory).toHaveBeenCalledTimes(0);      
          expect(onNewCategory).not.toHaveBeenCalled();
        //screen.debug()
          
        })

 })