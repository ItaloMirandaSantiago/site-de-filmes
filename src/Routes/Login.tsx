import { useContext, useState } from "react"
import { UserApi } from "../components/request/UserApi"
import { TokenContext } from "../Contexts/TokenUser"
import { useNavigate } from "react-router-dom"
import { Loading } from "../components/Loading"

export const Login = ()=>{
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const tokenContext = useContext(TokenContext)
    const [checkbox, setCheckbox] = useState<boolean>(true)
    const navigate = useNavigate()
    
    async function RequestCreate() {
        
        const button = document.getElementById("button")
        if (button) {
            button.innerHTML = "Carregando..."
        }
        try{
            let res = await UserApi({Params: "/login", method : "post", data : {name, password}}).then(response =>{
                return response
            })
            if (res.token) {
                tokenContext?.settoken(res.token)  
                if (checkbox) {
                    localStorage.setItem('token', res.token)   
                }
                if (button) {
                    button.innerHTML = "Login"
                }
                navigate("/") 
            }else{
                setName("")
                setPassword("")
                const button = document.getElementById("button")
                if (button) {
                    button.innerHTML = "Login"
                }
                alert("Usuário não encontrado")
            }
        }catch(err){
            const button = document.getElementById("button")
            if (button) {
                button.innerHTML = "Login"
            }
            alert("servidor fora do ar")
        }
    }

    return(
        <div className="flex justify-center items-center h-[88vh] bg-black">
            <form className="w-3/4 h-3/4 rounded-sm bg-black text-center max-w-screen-sm">
                <h2 className="font-bold text-2xl mt-3">Login</h2>
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
                    <label htmlFor="password"></label>
                    <input id="password" className="placeholder:text-white pl-2 outline-none text-white border-2 border-solid border-rgba-255-255-255-20 bg-transparent rounded-3xl my-1 py-2 w-3/4"
                     type="password" placeholder="Senha!" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <div className="flex justify-around w-full">
                        <label className="opacity-50 text-sm" htmlFor="remember">
                            <input onClick={()=>{setCheckbox(!checkbox)}}  type="checkbox" name="remember" id="remember" defaultChecked />
                            Lembre-se de mim
                        </label>
                        <button className="rounded-3xl py-2 bg-gray-400 w-2/4 text-center text-black" type="button" onClick={RequestCreate} >Conectar</button>
                    </div>
                  
                      <button id="button" type="button" onClick={RequestCreate} className="text-black">Conectar</button>
                  
                </div>
            </form>
        </div>
    )
}