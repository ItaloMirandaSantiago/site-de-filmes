import { Link } from "react-router-dom"

export const Login = ()=>{
    

    return(
        <div className="w-screen h-screen container flex justify-center items-center text-black">
            <div className="w-2/4 h-2/4 rounded-md bg-white text-center">
                <h2>Login</h2>
                <div className="flex justify-center justify-items-center items-center ">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img className=" w-full h-full object-cover" src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/01/images-600x377.png" 
                        alt="imagem não encontratada"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <p className="text-left">E-mail</p>
                    <input className="my-1 py-2 border border-black w-3/4" type="email" placeholder="e-mail!"></input>
                    <p className="text-left">Senha</p>
                    <input className="my-1 py-2 border border-black w-3/4" type="password" placeholder="Senha"></input>
                    <div>
                        <input type="checkbox" name="remember" defaultChecked />
                        <label className="opacity-50 text-sm" htmlFor="remember">Lembre-se de mim</label>
                    </div>
                  <Link className="py-2 bg-gray-400 rounded-sm w-2/4 text-center" to={"/"}>
                      <button>Conectar</button>
                  </Link>
                </div>
            </div>
        </div>
    )
}