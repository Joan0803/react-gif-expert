import { useState } from "react"
import { AddCategory,GifGrid } from "./components/";


export const GifExpertApp= ()=>{

   const [categories,setCategories]= useState(['Love Live Sunshine']);
   const onAddCategory = (newCategory)=>{

    if ( categories.includes(newCategory) ) return;
     
    
  setCategories ([newCategory, ...categories])
   }
    

  
    return(
        <>
        {/* titulo*/}
        <h1>GifExpertApp</h1>
        
        {/* input*/}
        <AddCategory  
            //setCategories = {setCategories}/>
            onNewCategory = {(event)=> onAddCategory(event)}
        />
        {/* Listado de gif*/}
    
            {categories.map( category =>( 
            <GifGrid 
                key={category}
                category={category} /> 
            ))
        }

        
            {/* Gif item*/}
        </>
    )
}