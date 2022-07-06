import { useState } from "react"



export const AddCategory = ( {onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange=({target})=>{
        
        setInputValue(target.value);



    }
    const onSubmit=(event)=>{
        const textValue=inputValue.trim();
        event.preventDefault();
        if(textValue.length<=1) return;
        // setCategories(categories=>[inputValue,...categories]);
        setInputValue('');
        onNewCategory(textValue);
        

    }

  return (
    
        <form onSubmit={onSubmit}>
              <input
                  type="text"
                  placeholder="seek Gifs"
                  value={inputValue}
                  onChange={onInputChange}
                  

              />
        </form>
    )
}
