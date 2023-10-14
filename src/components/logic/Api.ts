import { confingaxios } from '../../axiosconfig/AxiosConfig';

export const Api = async ({Params} : {Params: string})=>{
    const res = await confingaxios.get(Params)
    return res.data
}