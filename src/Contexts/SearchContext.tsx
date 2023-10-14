import { ReactNode, createContext, useState } from "react";
import { Apiresponse } from "../types/Tendencies";

type SearchContextType = {
    ResSearch: Apiresponse | null,
    setResSearch: (n: Apiresponse) => void
}

export const SearchContext = createContext<SearchContextType | null>(null)

type Props = {children: ReactNode}

export const SearchProvider = ({children}: Props) =>{
    const [ResSearch, setResSearch] = useState<Apiresponse | null>(null)
    return(
        <SearchContext.Provider value={{ResSearch, setResSearch}}>
            {children}
        </SearchContext.Provider>
    )
}