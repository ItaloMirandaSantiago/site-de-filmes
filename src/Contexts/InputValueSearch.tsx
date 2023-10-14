
import { ReactNode, createContext, useState } from "react"

type InputContext = {
    ValueInput : string | null
    setValueInput : (n : string | null) => void
}

export const InputValueContext = createContext<InputContext | null>(null)

type Props = {children : ReactNode}

export const InputValueSearchProvider = ({children} : Props)=>{
    const [ValueInput, setValueInput] = useState<string | null>(null)

    return (
        <InputValueContext.Provider value={{ValueInput, setValueInput}}>
            {children}
        </InputValueContext.Provider>
    )
}