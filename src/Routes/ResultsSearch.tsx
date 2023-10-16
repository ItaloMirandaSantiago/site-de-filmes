import { Compiler } from "../components/Compiler"
import { Search } from "../components/Search"
import { useContext} from "react"
import { ImageShadow } from "../components/ImageShadow"
import { SearchContext } from "../Contexts/SearchContext"

export const ResultsSearch = ()=>{
    const resValue = useContext(SearchContext)
    return(
        <div className="h-screen w-screen">
                <ImageShadow />
                <Search />
                <Compiler api={resValue?.ResSearch? resValue.ResSearch?.results : null} title="Principais Resultados" favorite={false}/>
        </div>
    )
}