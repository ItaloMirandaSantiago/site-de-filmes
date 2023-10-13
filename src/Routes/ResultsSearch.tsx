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
    const resValue = useContext(SearchContext)
    return(
        <div className="h-screen w-screen">
                <Menu />
                <ImageShadow />
                <Search />
                <Compiler api={resValue? resValue.ResSearch : null} title="Principais Resultados"/>
        </div>
    )
}