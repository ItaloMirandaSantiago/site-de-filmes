import { useParams } from "react-router-dom"
import { Compiler } from "../components/Compiler"
import { Search } from "../components/Search"
import { Apiresponse, Movie } from "../types/Tendencies"
import { useEffect, useState } from "react"

export const ResultsSearch = ()=>{
    const [SearchApi, setSearchApi] =  useState<Apiresponse | null>(null) 
    const {slug} = useParams<string>()
    useEffect(()=>{
        if (slug) {
            try{
                const movie: Apiresponse = JSON.parse((decodeURIComponent(slug)))
                setSearchApi(movie)
            }catch(err){
                alert(`error ao analisar o Json ${err}`)
            }
        }
    }, [slug])
    return(
        <div>
            <Search />
            {SearchApi && 
                <Compiler api={SearchApi} title="Principais Resultados"/>
            }
        </div>
    )
}