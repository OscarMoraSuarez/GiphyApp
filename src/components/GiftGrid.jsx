import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from "prop-types";

export const GiftGrid = ({category}) => {
    
    const {images,isLoading}=useFetchGifs(category);
    console.log({isLoading});
    
    return (
      <>
          <h3>{category}</h3>
          {
            isLoading && (<h2>Cargando...</h2>)
          }

          <div className='card-grid'>
            
          {images.map(( img ) =>(
            <GifItem 
              key={img.id} 
              {...img}
              
            /> ))
          } 

        </div>
      </>
    )
}
GiftGrid.propTypes={

  category:PropTypes.string.isRequired

}
