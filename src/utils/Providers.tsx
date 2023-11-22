import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactNode } from "react"
import { SearchProvider } from "../Contexts/SearchContext"
import { InputValueSearchProvider } from "../Contexts/InputValueSearch"
import { TokenContextProvider } from "../Contexts/TokenUser"

type Props = {
    children : ReactNode
}

export const Providers = ({children} : Props) => {
    
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
            <SearchProvider>
                <InputValueSearchProvider>
                    <TokenContextProvider>
                        {children}
                    </TokenContextProvider>
                </InputValueSearchProvider>
            </SearchProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export {}