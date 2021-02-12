import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category, limit }) => {
  const { data: images, loading } = useFetchGifs(category, limit);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p className='animate__animated animate__headShake'>Loading...</p>}
      <div className='card-grid'>
        {
          images.map((img) => {
            return <GifGridItem
              key={img.id}
              {...img}
            />
          })
        }

      </div>
    </>
  )
}
