import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactNode } from "react"
import { SearchProvider } from "../Contexts/SearchContext"
import { InputValueSearchProvider } from "../Contexts/InputValueSearch"

type Props = {
    children : ReactNode
}

export const Providers = ({children} : Props) => {
    
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
            <SearchProvider>
                <InputValueSearchProvider>
                {children}
                </InputValueSearchProvider>
            </SearchProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export {}