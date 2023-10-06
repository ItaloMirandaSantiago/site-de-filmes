import { useEffect, useState } from 'react';
import { Apiresponse } from '../../types/Tendencies';
import axios from 'axios';

export const Api = ({Params} : {Params: string})=>{
    const api = axios.create({
      baseURL : "https://api.themoviedb.org/3",
      headers : {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjAxNGZlNmMwOGRiNWIwZDNhYTQ0OWUzYzk3M2ZlOSIsInN1YiI6IjY1MTQ4M2RkYTEwNzRiMDBhZDQ4YmM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rb2Whl68tAdBxc0lSFWz2eTnfu2IcXWFwEKDcWUehjw'
      }
    })
    const [resapi, setResapi] = useState<Apiresponse | null>(null)
    
    useEffect(()=>{
      const requestfech = async ()=>{
        try{
         const res = await api.get(Params)
         setResapi(res.data)
        }catch(err){
          alert(`algo deu errado! verifique sua coneção de rede ou tente mais tarde. error: ${err}`)
        }
      }
      requestfech()

    },[Params])
      return resapi
}