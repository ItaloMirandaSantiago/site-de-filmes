export const Login = ()=>{
    return(
        <div className="container flex justify-center justify-items-center text-white">
            <div className=" flex flex-col">
                <h2>Login</h2>
                <input className="my-1 py-2 bg-gray-400 text-white" type="email" placeholder="Digite seu e-mail aqui!"></input>
                <input className="my-1 py-2 text-black" type="password" placeholder="Senha"></input>
                <input type="checkbox" name="remember" value={"Lembrar de mim?"} placeholder="Lembrar de mim?"></input>
            </div>
        </div>
    )
}