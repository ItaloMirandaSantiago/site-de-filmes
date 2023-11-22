import { ReactNode, createContext, useState } from "react";

type TokenType = {
    token: string | null,
    settoken: (n: string | null) => void
}

export const TokenContext = createContext<TokenType | null>(null)

type Props = {children: ReactNode}

export const TokenContextProvider = ({children}: Props) =>{
    const [token, settoken] = useState<string | null>(null)
    return(
        <TokenContext.Provider value={{token, settoken}}>
            {children}
        </TokenContext.Provider>
    )
}