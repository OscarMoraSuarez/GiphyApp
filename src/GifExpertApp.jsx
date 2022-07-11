import { useState } from "react";
import { AddCategory,GiftGrid} from "./components";





export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory=(NewCategory)=>{
      if (categories.includes(NewCategory)) return;
         /* categories.push(NewCategory);  */
         setCategories([...categories,NewCategory]); 
        /* setCategories(NewCategory=>[...categories,NewCategory]); */
        console.log(NewCategory);
    }


  return (
    <>  
        <h1>GifExpertApp</h1>
          <AddCategory 
          /* setCategories={setCategories}  */
          onNewCategory={value=>onAddCategory(value)}
          />
        
        
        {categories.map(category => (
                <GiftGrid 
                  key={category} 
                  category={category}
                />
            )
          )
        }
        

        
    </>
  )
}
