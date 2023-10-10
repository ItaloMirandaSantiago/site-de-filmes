import { useEffect, useState } from 'react';
import { Apiresponse } from '../../types/Tendencies';
import axios from 'axios';
import { api } from '../../axiosconfig/AxiosConfig';

export const Api = async ({Params} : {Params: string})=>{
        try{
          const res = await api.get(Params)
         return res.data
        }catch(err){
          throw err
        }

}