import { useLocation, useParams } from "react-router-dom"
import { Compiler } from "../components/Compiler"
import { Search } from "../components/Search"
import { Apiresponse, Movie } from "../types/Tendencies"
import { useEffect, useState } from "react"
import { json } from "stream/consumers"
import { Menu } from "../components/Menu"
import { ImageShadow } from "../components/ImageShadow"

export const ResultsSearch = ()=>{
    const [SearchApi, setSearchApi] =  useState<Apiresponse | null>(null) 
    const location = useLocation()
    const dados = location.state

    useEffect(()=>{
 
        if (dados) {
            try{
                setSearchApi(dados)
            }catch(err){
                alert(`error ao analisar o Json ${err}`)
            }
        }

    }, [])
    return(
        <div>
                <Menu />
                <ImageShadow />
                <Search />
            {SearchApi && 
                <Compiler api={SearchApi} title="Principais Resultados"/>
            }
        </div>
    )
}