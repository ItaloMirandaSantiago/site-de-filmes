import { useEffect, useState } from "react"
import { Movie } from "../types/Tendencies"
import { Compiler } from "../components/Compiler"

export const Favorites = ()=>{
    const [items, setItems] = useState<Movie[] | null> (null)
    const save = localStorage.getItem('save')
    useEffect(()=>{
        if (save) {
            let ve = JSON.parse(save)
            if (Array.isArray(ve)) {
                setItems(ve)
            }else{
                setItems([ve])
            }
        }
    }, [localStorage.getItem('save')])

    return(
        <div className="text-white mt-3 text-center">
            <h2 className="text-3xl text-center">Organize seus filmes da forma mais confortavel para você!</h2>
            {items?.length ? 
                <Compiler api={items} title='Salvos' favorite={true} />
                :
                <div className="bg-red-500">
                    <h2>Nenhum filme salvo no momento</h2>
                </div>
            }
        </div>
    )
}