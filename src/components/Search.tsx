import { useContext, useEffect, useState } from "react"
import { Api } from "./request/ApiMovies"
import { SearchContext } from "../Contexts/SearchContext"
import { InputValueContext } from "../Contexts/InputValueSearch"

export const Search = ()=>{
    const timer = 1000
    const [timersearch, setTimerSearch] = useState<NodeJS.Timeout | null>(null)
    const SearchValue = useContext(SearchContext)
    const InputValue = useContext(InputValueContext)

    useEffect(()=>{
        if (timersearch) {
            clearTimeout(timersearch)
        }
           const newTimer = setTimeout(()=>{
                if (InputValue?.ValueInput) {
                    console.log('rodo')
                    const apii = Api({ Params : `/search/movie?query=${InputValue?.ValueInput}`})
                    apii.then(e=>{
                        SearchValue?.setResSearch(e)
                    }).catch((err)=>{
                        alert('Algo deu errado, volte mais tarde.')
                    })
                }
            }, timer)
            setTimerSearch(newTimer)
            // eslint-disable-next-line
    }, [InputValue?.ValueInput])
    

    return(
        <div className=" text-center mb-5">
            <input className=" h-12 w-2/4 pl-3 rounded shadow-none outline-none" onChange={(e)=>InputValue?.setValueInput(e.target.value)} value={InputValue?.ValueInput ? InputValue.ValueInput : ""} type="text" placeholder="Encontre seus filmes favoritos" />
        </div>
    )
}