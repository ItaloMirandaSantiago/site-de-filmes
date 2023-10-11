import { useLocation, useParams } from "react-router-dom"
import { Compiler } from "../components/Compiler"
import { Search } from "../components/Search"
import { Apiresponse, Movie } from "../types/Tendencies"
import { useContext, useEffect, useState } from "react"
import { json } from "stream/consumers"
import { Menu } from "../components/Menu"
import { ImageShadow } from "../components/ImageShadow"
import { SearchContext } from "../Contexts/SearchContext"

export const ResultsSearch = ()=>{
    const [SearchApi, setSearchApi] =  useState<Apiresponse | null>(null) 
    const resValue = useContext(SearchContext)

    useEffect(()=>{
 
        if (resValue?.ResSearch) {
            try{
               
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
            {resValue?.ResSearch && 
                <Compiler api={resValue.ResSearch} title="Principais Resultados"/>
            }
        </div>
    )
}