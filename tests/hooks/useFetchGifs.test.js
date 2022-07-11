import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import { renderHook,waitFor } from "@testing-library/react";
    
describe('pruebas en useFetchGifs', () => { 


    test('debe regresar el estado incial', () => { 
    //es decir que las imagenes sean un arreglo vacio y el isloadin este en true    
    //los hooks necesitan el ciclod e vida del comp0onente para poder ser usados
    //para no usar un componente se usa renderHook
    const{result}=renderHook(()=>useFetchGifs('One Punch'));
    // loguear el resultado de retorno del hook
    // console.log(result)
    const {images,isLoading}=result.current;

     expect(images.length).toBe(0);
     expect( isLoading ).toBeTruthy();   

    });

    test('debe retornar un arraglo de imagenes y el isLoading en false',async () => {
       
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        //waitfor es una promesa de testing library
        //le digo que espere ha que el resultado.current.images sea mas grande que cero
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0),
            
        )
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})