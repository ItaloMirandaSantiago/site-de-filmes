import { useEffect, useState } from "react"
import { Api } from "./logic/Api"
import { useNavigate } from "react-router-dom"
import { api } from "../axiosconfig/AxiosConfig"


export const Search = ()=>{
    const [valueInputSearch, setValueInputSearch] = useState("")
    const navigate = useNavigate()
    const timer = 3000
    useEffect(()=>{
        const esperar = async ()=>{
            
        }
        if (valueInputSearch) {
            const apii = api.get(`/search/movie?query=${valueInputSearch}`)
            //  console.log(api)
            apii.then(e=>console.log(e))
              console.log(valueInputSearch)
            //   navigate(`Search/${api}`) /search/movie?query=naruto&
          //  if (apii) {
              // navigate(`Search/${encodeURIComponent(JSON.stringify(api))}`)
          //  }   
        }
    }, [valueInputSearch])
    

    return(
        <div className="text-center">
            <input onChange={(e)=>setValueInputSearch(e.target.value)} className="py-2 rounded-sm" type="text" placeholder="Pesquise seus filmes favoritos" />
        </div>
    )
}