import { ConfigApiUSER } from "../../axiosconfig/AxiosConfig"

type typeApiRequest = {
    Params : string,
    method: 'get' | 'post' | 'put' | 'delete',
    data: {
        name: string, 
        password: string
    }
}

export const UserApi = async ({Params, method, data} : typeApiRequest)=>{
    const res = (await ConfigApiUSER.request({
        url: Params,
        method: method,
        data : new URLSearchParams(data)
    }))
    return res.data
}