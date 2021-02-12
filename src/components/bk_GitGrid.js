import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGits';
import { GifGridItem } from './GifGridItem';

export const bkGifGrid = ({ category,limit }) => {
  //const [count, setCount] = useState(0)
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category,limit).then(imgs=>setImages(imgs));
  }, [category])
  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {
          images.map((img) => {
            return <GifGridItem
              key={img.id}
              {...img}
            />
          })
        }
        {/* <h3>{count}</h3>
      <button onClick={()=>SetCount(count+1)}>Click</button> */}
      </div>
    </>
  )
}
