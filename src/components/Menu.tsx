import { useContext, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { InputValueContext } from "../Contexts/InputValueSearch"

export const Menu = ()=>{
    const navigate = useNavigate()
    const InputValue = useContext(InputValueContext)
    const nav = useRef<HTMLDivElement | null>(null)

    function addColor(NavElement: HTMLElement){
        
        nav?.current?.querySelectorAll('.menu, .text-blue-600').forEach((element =>{
            if (element.className === 'text-blue-600') {
              element.className = 'menu'
            }
          }))
          NavElement.className = 'text-blue-600'
    }

    return(
        <div className=" py-4 flex justify-around items-center bg-gray-700">
            <button className="py-2 px-2 bg-blue-950 rounded" onClick={()=>{
                navigate(-1)
                InputValue?.setValueInput(null)}}>
                    Voltar
            </button>
            <div>Logo</div>
            <nav ref={nav} className="flex gap-3">
                <Link className="menu" onClick={(e)=>addColor(e.currentTarget)} to={'/favorites/'}>favoritos</Link>
                <a className="menu" onClick={(e)=>addColor(e.currentTarget)} href="https://www.themoviedb.org/signup?language=pt-BR">Cadastrar</a>
                <Link className="menu" onClick={(e)=>addColor(e.currentTarget)} to="/login">Login</Link>
            </nav>
        </div>
    )
}