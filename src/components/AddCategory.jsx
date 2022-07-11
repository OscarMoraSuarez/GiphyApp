import { useState } from "react"
import PropTypes from "prop-types"
 

export const AddCategory = ( {onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    //capturo el valor del input
    const onInputChange=({target})=>{
        
        setInputValue(target.value);



    }
    // capturo el evento Submit
    const onSubmit=(event)=>{
        
        const textValue=inputValue.trim();
        event.preventDefault();
        if(textValue.length<=1) return;
        // setCategories(categories=>[inputValue,...categories]);
        setInputValue('');
        onNewCategory(textValue);
        

    }

  return (
    
        <form onSubmit={onSubmit} aria-label='form'>
              <input
                  type="text"
                  placeholder="seek Gifs"
                  value={inputValue}
                  onChange={onInputChange}
                />
        </form>
    )
}
AddCategory.propTypes={

    onNewCategory:PropTypes.func.isRequired


}