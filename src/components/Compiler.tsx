import { MutableRefObject, useEffect, useRef, useState } from "react"
import { Apiresponse } from "../types/Tendencies"
import {motion} from 'framer-motion'
import { Link } from "react-router-dom"
export const Compiler = ({api, title} : {api : Apiresponse, title : string}) =>{
    
    const carousel: MutableRefObject<HTMLUListElement | null> = useRef(null)
    const [width, setWidth] = useState(0)
    
    useEffect(()=>{
        if (carousel.current) {
            console.log(title)
            console.log(api)
            setWidth((carousel.current?.scrollWidth - window.innerWidth))   
        }
    }, [window.innerWidth])
    
    return(
        <div className="border-b border-white bg-black">
            <h2 className="text-white ml-2 ">{title}</h2>
            <motion.div whileTap={{cursor: 'grabbing'}} className="bg-black cursor-grab flex ml-2 ">
                <motion.ul ref={carousel} drag="x" 
                dragConstraints={{right: 0, left: -width}} 
                initial={{x: 100}} animate={{x:0}} transition={{duration: 0.8}} 
                className="flex gap-6 items-center py-7 min-width: max-content;">
                    {api.results.map(res =>{
                                return(
                                    <li key={res.id} className="w-44 flex min-h-max ">
                                      <Link className="w-4/5 h-4/5" to={`/view/${encodeURIComponent(JSON.stringify(res))}`}>
                                      <img className="flex w-4/5 h-4/5 rounded-lg cursor-pointer transition-transform transform scale-100 hover:scale-110" src={res.poster_path ? `https://image.tmdb.org/t/p/w500${res.poster_path}` : "https://portal.crea-sc.org.br/wp-content/uploads/2017/11/imagem-indisponivel-para-produtos-sem-imagem_15_5.jpg"}/>
                                      {res.poster_path ? "" :
                                          <p className="text-white">{res.title}</p>                                      
                                      }

                                      </Link>
                                    </li>
                                    )  
                    })}
                </motion.ul>
            </motion.div>
        </div>
    )
}