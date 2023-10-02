import { useEffect, useState } from 'react';
import { Apiresponse } from '../../types/Tendencies';

export const Api = ()=>{
    const [api, setapi] = useState<Apiresponse | null>(null)

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjAxNGZlNmMwOGRiNWIwZDNhYTQ0OWUzYzk3M2ZlOSIsInN1YiI6IjY1MTQ4M2RkYTEwNzRiMDBhZDQ4YmM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rb2Whl68tAdBxc0lSFWz2eTnfu2IcXWFwEKDcWUehjw'
      }
    };
    
    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/movie/popular', options)
      .then(response => response.json())
      .then((response: Apiresponse) =>{
        console.log(response)
         setapi(response)})
      .catch(err => console.error(err));
    },[])
      return api
}