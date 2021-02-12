import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGits';
export const useFetchGifs = (category, limit) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });
  useEffect(() => {
    getGifs(category, limit).then(imgs => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false
        })
      }, 1000);
      
    });
  }, [category])
  // setTimeout(() => {
  //   setstate({
  //     data: [1, 2, 3, 4, 5],
  //     loading: false
  //   });
  // }, 3000);
  return state;
}