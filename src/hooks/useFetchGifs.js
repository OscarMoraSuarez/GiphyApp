import { useState,useEffect } from "react";
import {getGifs}from'../helpers/getGifs';


/* Un hook no es mas que una funcion que regresa algo */
export const useFetchGifs = (category) => {

     const [images, setImages] = useState([]) 
     const [isLoading, setisLoading] = useState(true)

     const getImages=async()=>{
     const newImages = await getGifs(category); 
     setImages(newImages);
     setisLoading(false);
   }

   useEffect(()=>{
     getImages();
   },[ ]) 

    return{

        images,
        isLoading

         

    }

}
