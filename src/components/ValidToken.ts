import { useContext } from "react"
import { TokenContext } from "../Contexts/TokenUser"
import { UserApi } from "./request/UserApi"

 export const ValidToken = async ()=>{
    const tokenContext = useContext(TokenContext)

    if (tokenContext?.token) {
            let res = await UserApi({Params: "ValidToken", method: "get", token: tokenContext.token}).then(response => {
                return response
            })
            console.log(res)
            return res.sucess            
    }

    return false
}

