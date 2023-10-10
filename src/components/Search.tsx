import { SetStateAction, useEffect, useState } from "react"
import { Api } from "./logic/Api"
import { useNavigate } from "react-router-dom"

export const Search = ()=>{
    const [valueInputSearch, setValueInputSearch] = useState("")
    const navigate = useNavigate()
    const timer = 1000
    const [timersearch, setTimerSearch] = useState<NodeJS.Timeout | null>(null)


    useEffect(()=>{

        if (timersearch) {
            clearTimeout(timersearch)
        }
           const newTimer = setTimeout(()=>{
                if (valueInputSearch) {
                    const apii = Api({ Params : `/search/movie?query=${valueInputSearch}`})
                    apii.then(e=>{
                        navigate(`Search`, {state:{ dados : e}}
                    )}).catch((err)=>{
                        alert('Algo deu errado, volte mais tarde.')
                    })
                }
            }, timer)
            setTimerSearch(newTimer)
    }, [valueInputSearch])
    

    return(
        <div className="text-center">
            <input onChange={(e)=>setValueInputSearch(e.target.value)} value={valueInputSearch} className="py-2 rounded-sm" type="text" placeholder="Pesquise seus filmes favoritos" />
        </div>
    )
}