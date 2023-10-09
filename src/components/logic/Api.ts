import { useEffect, useState } from 'react';
import { Apiresponse } from '../../types/Tendencies';
import axios from 'axios';
import { api } from '../../axiosconfig/AxiosConfig';

export const Api = ({Params} : {Params: string})=>{

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