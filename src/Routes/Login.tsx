import { Link } from "react-router-dom"

export const Login = ()=>{
    

    return(
        <div className="flex justify-center items-center h-[88vh]">
            <form className="w-3/4 h-3/4 rounded-sm bg-teal-700 text-center max-w-screen-sm">
                <h2 className="font-bold text-2xl">Login</h2>
                <div className="flex justify-center justify-items-center items-center ">
                    <div className="mt-4 w-16 h-16 rounded-full overflow-hidden">
                        <img className=" w-full h-full object-cover" src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/01/images-600x377.png" 
                        alt="imagem não encontratada"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-5 mt-2 items-center">

                    <input className=" placeholder:text-white pl-2 outline-none text-white border-2 border-solid border-rgba-255-255-255-20 bg-transparent rounded-3xl my-1 py-2 w-3/4" type="email" placeholder="e-mail!"></input>

                    <input className="placeholder:text-white pl-2 outline-none text-white border-2 border-solid border-rgba-255-255-255-20 bg-transparent rounded-3xl my-1 py-2 w-3/4" type="password" placeholder="Senha!"></input>
                    <div className="flex justify-around w-full">
                        <label className="opacity-50 text-sm" htmlFor="remember">
                            <input type="checkbox" name="remember" id="remember" defaultChecked />
                            Lembre-se de mim
                        </label>
                        <button className="opacity-50 text-sm no-underline hover:underline">esqueceu sua senha?</button>
                    </div>
                  <Link className=" rounded-3xl py-2 bg-gray-400 w-2/4 text-center" to={"/"}>
                      <button className="text-black">Conectar</button>
                  </Link>
                </div>
            </form>
        </div>
    )
}