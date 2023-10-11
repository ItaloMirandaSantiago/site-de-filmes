import { SetStateAction, useContext, useEffect, useState } from "react"
import { Api } from "./logic/Api"
import { Link, useNavigate } from "react-router-dom"
import { SearchContext } from "../Contexts/SearchContext"

export const Search = ()=>{
    const navigate = useNavigate()
    const timer = 1000
    const [timersearch, setTimerSearch] = useState<NodeJS.Timeout | null>(null)
    const SearchValue = useContext(SearchContext)
    const [inputValue, setInputValue] = useState('')

    useEffect(()=>{
        if (timersearch) {
            clearTimeout(timersearch)
        }
           const newTimer = setTimeout(()=>{
            console.log('indo useeffect ')
                if (inputValue) {
                    console.log("rodou")
                    const apii = Api({ Params : `/search/movie?query=${inputValue}`})
                    apii.then(e=>{
                        SearchValue?.setResSearch(e)
                    }).catch((err)=>{
                        alert('Algo deu errado, volte mais tarde.')
                    })
                }
            }, timer)
            setTimerSearch(newTimer)

    }, [inputValue])
    

    return(
        <div className="text-center">
            <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} className="py-2 rounded-sm" type="text" placeholder="Pesquise seus filmes favoritos" />
        </div>
    )
}