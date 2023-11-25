import { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { InputValueContext } from "../Contexts/InputValueSearch"
import { UserApi } from "./request/UserApi"
import { TokenContext } from "../Contexts/TokenUser"
import { AlertContext } from "../Contexts/AlertContext"

export const Menu = ()=>{
    const navigate = useNavigate()
    const InputValue = useContext(InputValueContext)
    const nav = useRef<HTMLDivElement | null>(null)
    const [MoveMenu, setMoveMenu] = useState<boolean>(true)
    const [token, setToken] = useState(false)
    const tokenContext = useContext(TokenContext)
    const alertContext = useContext(AlertContext)

    useEffect(()=>{
        const tokenRequest = async ()=>{
            let saveToken = localStorage.getItem('token')
            if (saveToken) {
                console.log(saveToken)
                tokenContext?.settoken(saveToken)
            }
            if (tokenContext?.token) {
                console.log(tokenContext.token)
                try{
                    let res = await UserApi({Params: "ValidToken", method: "get", token: tokenContext.token}).then(response => {
                        return response
                    })
                    if (res.sucess) {
                        setToken(true)   
                    }else{
                        setToken(false)
                        tokenContext.settoken(null)
                    }
                }catch(err){
                    setToken(false)
                     alertContext?.setAlert('Verifique sua internet e/ou volte mais tarde')
                    }
            }else(
                setToken(false)
            )
        }
        tokenRequest()
    }, [tokenContext])

    function addColor(NavElement: HTMLElement){
        
        nav?.current?.querySelectorAll('.menu, .bg-blue-500').forEach((element =>{

            if (element.className === 'menu animationButtonMenu duration-500 rounded-md opacity-0 sm:opacity-100 bg-blue-500') {
              element.classList.remove('bg-blue-500')
            }
          }))
          NavElement.classList.add('bg-blue-500')
    }

    async function active() {
        if (MoveMenu) {
            nav.current?.classList.add('translate-x-0') 
            nav.current?.classList.remove('translate-x-full') 
            nav.current?.querySelectorAll('.menu, .bg-gray-700').forEach(element  => {
                element.classList.add('animation')
            })

            document.querySelectorAll('.divMenu').forEach((element, index) => {
                if (index === 0) {
                    element.classList.add('op1')
                }else if (index === 1) {
                    element.classList.add('op2')
                }else if (index === 2) {
                    element.classList.add('op3')
                }else{
                    alert('algo deu errado, reinicie o site')
                }
            })
            setMoveMenu(false)
        }else{
            nav.current?.classList.add('translate-x-full') 
            nav.current?.classList.remove('translate-x-0')
            nav.current?.querySelectorAll('.menu, .bg-gray-700').forEach(element => {
                element.classList.remove('animation')
            }) 

            document.querySelectorAll('.divMenu').forEach((element, index) => {
                if (index === 0) {
                    element.classList.remove('op1')
                }else if (index === 1) {
                    element.classList.remove('op2')
                }else if (index === 2) {
                    element.classList.remove('op3')
                }else{
                    alert('algo deu errado, reinicie o site')
                }
            })

            setMoveMenu(true)
        }
    }

    return(
        <div className=" flex justify-around items-center bg-gray-700 h-20 shadow-customMenu">
            <button className="animationButtonMenu duration-500 py-2 px-2 bg-black rounded text-lg" onClick={()=>{
                navigate(-1)
                InputValue?.setValueInput(null)}}>
                    Voltar
            </button>
            <div className=" cursor-pointer font-bold text-2xl"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/italo-miranda-santiago-618528226/">{"<Italo/>"}</a></div>

                <div onClick={active} className=" z-20 MenuResponsivo cursor-pointer block sm:invisible">
                    <div className="divMenu w-8 h-1 m-2 bg-white transition duration-300"></div>
                    <div className="divMenu w-8 h-1 m-2 bg-white transition duration-300"></div>
                    <div className="divMenu w-8 h-1 m-2 bg-white transition duration-300"></div>
                </div>

            <nav ref={nav} className="absolute top-12vh z-10 right-0 w-50vw h-50vh flex flex-col items-center justify-around 
            transform translate-x-full transition-transform duration-500 ease-in bg-slate-900
             sm:h-full sm:top-0 sm:flex-row sm:static sm:bg-gray-700 sm:translate-x-0 sm:text-lg sm:gap-3">
                <Link className="menu animationButtonMenu duration-500 rounded-md opacity-0 sm:opacity-100" onClick={(e)=>{addColor(e.currentTarget); InputValue?.setValueInput(null)}}  to={'/home'}>Início</Link>
                <Link className="menu animationButtonMenu duration-500 rounded-md opacity-0 sm:opacity-100" onClick={(e)=>addColor(e.currentTarget)} to={'/favorites/'}>Favoritos</Link>
                {token ? 
                    <Link className="menu animationButtonMenu duration-500 rounded-md opacity-0 sm:opacity-100" onClick={(e)=>addColor(e.currentTarget)} to={'/'}>Conta</Link>
                    :
                    <>
                        <Link className="menu animationButtonMenu duration-500 rounded-md opacity-0 sm:opacity-100" onClick={(e)=>addColor(e.currentTarget)} to={'/create'}>Cadastrar</Link>
                        <Link className="menu animationButtonMenu duration-500 rounded-md opacity-0 sm:opacity-100" onClick={(e)=>addColor(e.currentTarget)} to="/login">Login</Link>  
                    </>

                }              
            </nav>
        </div>
    )
}