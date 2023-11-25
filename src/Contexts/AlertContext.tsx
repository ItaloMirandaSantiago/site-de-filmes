import { ReactNode, createContext, useState } from "react";

type Alerttype = {
    alert: string | null,
    setAlert: (n: string | null) => void
}

export const AlertContext = createContext<Alerttype | null>(null)

type Props = {children: ReactNode}

export const AlertContextProvider = ({children}: Props) =>{
    const [alert, setAlert] = useState<string | null>(null)
    return(
        <AlertContext.Provider value={{alert, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}