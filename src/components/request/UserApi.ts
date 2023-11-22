import { ConfigApiUSER } from "../../axiosconfig/AxiosConfig"

type typeApiRequest = {
    Params : string,
    method: 'get' | 'post' | 'put' | 'delete',
    data?: {
        name?: string, 
        password?: string,
        idmovie?: string,
    },
    token?: string
}

export const UserApi = async ({Params, method, data, token} : typeApiRequest)=>{
    const res = (await ConfigApiUSER.request({
        url: Params,
        method: method,
        data : new URLSearchParams(data),
        headers : {
            Authorization : token ? `Bearer ${token}` : null
        }
        
    }))
    return res.data
}