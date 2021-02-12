import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
   //const categories=['One Punch','Samurai X','Dragon Ball'];
   const [categories, setCategories] = useState(['Dororo']);
  // const handleAdd=()=>{
  //   // setCategories([...categories,'Los 7 pecados']);
  //   setCategories(c=>[...categories,'Bleach']);//Lamando al callback
  // }
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      
      <ol>
      {
        categories.map((category)=>{
          //return <li key={category}>{category}</li>;
          return <GifGrid
                    key={category}
                    category={category}
                    limit={10}
                  />
        })
      }
      </ol>
    </div>
  )
}

