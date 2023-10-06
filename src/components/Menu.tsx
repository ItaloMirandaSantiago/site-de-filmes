import { Link } from "react-router-dom"

export const Menu = ()=>{
    return(
        <div className=" py-4 flex justify-around bg-gray-700">
            <div>Logo</div>
            <div className="flex gap-3">
                <a href="https://www.themoviedb.org/signup?language=pt-BR">Cadastrar</a>
                <Link to="/login/">Login</Link>
            </div>
        </div>
    )
}