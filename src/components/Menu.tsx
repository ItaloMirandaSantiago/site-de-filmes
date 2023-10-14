import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { InputValueContext } from "../Contexts/InputValueSearch"

export const Menu = ()=>{
    const navigate = useNavigate()
    const InputValue = useContext(InputValueContext)

    return(
        <div className=" py-4 flex justify-around items-center bg-gray-700">
            <button className="py-2 px-2 bg-blue-950 rounded" onClick={()=>{
                navigate(-1)
                InputValue?.setValueInput(null)}}>
                    Voltar
            </button>
            <div>Logo</div>
            <div className="flex gap-3">
                <Link to={'/favorites/'}>favoritos</Link>
                <a href="https://www.themoviedb.org/signup?language=pt-BR">Cadastrar</a>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}