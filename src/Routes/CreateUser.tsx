import { useContext, useState } from "react"
import { UserApi } from "../components/request/UserApi"
import { TokenContext } from "../Contexts/TokenUser"
import { useNavigate } from "react-router-dom"
import { AlertContext } from "../Contexts/AlertContext"

export const CreateUser = ()=>{
    const [name, setName] = useState<string>('')
    const [passwordCheck, setPasswordCheck] = useState<string>('')
    const [checkbox, setCheckbox] = useState<boolean>(true)
    const [password, setPassword] = useState<string>('')
    const [userLogged, setuserLogged] = useState<string | null>(null)
    const tokenContext = useContext(TokenContext)
    const navigate = useNavigate()

    async function RequestCreate() {
        const alertContext = useContext(AlertContext)
        
        if (passwordCheck === password) {
            try{
                let res = await UserApi({Params: "/create", method : "post", data : {name, password}}).then(response=>{
                    return response
                }).catch(err=>{
                    return {sucess : false}
                })
                if (res.sucess) {
                    if (checkbox) {
                        localStorage.setItem('token', res.token)   
                    }
                    setuserLogged(res.userName)
                    tokenContext?.settoken(res.token)
                    navigate("/") 
                }else{
                    setName('')
                    setPassword('')
                    alertContext?.setAlert('Usuário já consta em nosso sistema')
    
                } 
            }catch(err){
                alertContext?.setAlert("algo deu errado")
            }
        }else{
            alertContext?.setAlert("As senhas não são iguais")
        }
    }

    return(
        
        <div className="flex justify-center items-center h-[88vh] bg-black">
            {userLogged === null ? 
                <form className="w-3/4 h-3/4 rounded-sm bg-black text-center max-w-screen-sm">
                    <h2 className="font-bold text-2xl mt-3">Cadastrar</h2>
                    <div className="flex justify-center justify-items-center items-center ">
                        <div className="mt-4 w-16 h-16 rounded-full overflow-hidden">
                            <img className=" w-full h-full object-cover" src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/01/images-600x377.png" 
                            alt="imagem não encontratada"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-2 items-center">
                        <label htmlFor="email" ></label>
                        <input id="email" className=" placeholder:text-white pl-2 outline-none text-white border-2 border-solid border-rgba-255-255-255-20 bg-transparent rounded-3xl my-1 py-2 w-3/4"
                        type="email" placeholder="e-mail!" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        
                        <input id="password" className="placeholder:text-white pl-2 outline-none text-white border-2 border-solid border-rgba-255-255-255-20 bg-transparent rounded-3xl my-1 py-2 w-3/4"
                        type="password" placeholder="Senha!" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                        <input id="passwordcheck" className="placeholder:text-white pl-2 outline-none text-white border-2 border-solid border-rgba-255-255-255-20 bg-transparent rounded-3xl my-1 py-2 w-3/4"
                        type="password" placeholder="Repetir Senha!" value={passwordCheck} onChange={(e)=>{setPasswordCheck(e.target.value)}}/>

                        <div className="flex justify-around w-full">
                            <label className="opacity-50 text-sm" htmlFor="remember">
                                <input onClick={()=>{setCheckbox(!checkbox)}} type="checkbox" name="remember" id="remember" defaultChecked />
                                Lembre-se de mim
                            </label>
                            <button className="opacity-50 text-sm no-underline hover:underline">esqueceu sua senha?</button>
                        </div>
                    
                        <button className="rounded-3xl py-2 bg-gray-400 w-2/4 text-center text-black" type="button" onClick={RequestCreate} >Conectar</button>
                    
                    </div>
                </form>
                 :  
                <div>
                    <h1>{userLogged}, você já esta logado a sua conta!</h1>
                </div>}
        </div>
    )
}