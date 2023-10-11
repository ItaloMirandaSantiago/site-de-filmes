import { ReactNode, createContext, useState } from "react";
import { Apiresponse } from "../types/Tendencies";

type SearchContext = {
    ResSearch: Apiresponse | null,
    setResSearch: (n: any) => void
}

export const SearchContext = createContext<SearchContext | null>(null)

type Props = {children: ReactNode}

export const SearchProvider = ({children}: Props) =>{
    const [ResSearch, setResSearch] = useState(null)
    return(
        <SearchContext.Provider value={{ResSearch, setResSearch}}>
            {children}
        </SearchContext.Provider>
    )
}