import { useNavigate } from "react-router-dom"
import { ImageShadow } from "../components/ImageShadow"
import { PathRequests } from "../components/PathRequests"
import { Search } from "../components/Search"
import { useContext, useEffect } from "react"
import { InputValueContext } from "../Contexts/InputValueSearch"
import { Phrase } from "../components/Phrase"


export const Home = ()=>{
    const InputValue = useContext(InputValueContext)
    const navigate = useNavigate()
        useEffect(()=>{
            if (InputValue?.ValueInput) {
                navigate("Search")
           }
           // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [InputValue?.ValueInput])
 
    return(
        <div>
            <Phrase />
            <ImageShadow />
            <Search />          
            <PathRequests />
        </div>
    )
}