import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en helper getGifs', () => { 

    test('Debe retornar un arreglo de gifs', async() => { 

     const gifs=await getGifs('Dragon Ball');

    /*  const[{id,title,url}]=gifs;
     console.log(gifs)
     console.log(`id:${id}\ntitle:${title}\n${url}`);    */


     expect(gifs.length).toBeGreaterThan(0);
     expect(gifs[0]).toEqual(

        {
            id:expect.any(String),
            title: expect.any(String),
            url:expect.any(String)

        }

     )
     })


 })