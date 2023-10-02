import { Compiler } from "./Compiler"
import { Api } from "./logic/Api"

export const PathRequests = ()=>{
        const api = Api()

    return(
        <div>
            {api !== null && 
            <Compiler api={api} title="foda" />
            }
             {api !== null && 
            <Compiler api={api} title={"lancamento"} />
            }
             {api !== null && 
            <Compiler api={api} title="foda"/>
            }
        </div>
    )
}