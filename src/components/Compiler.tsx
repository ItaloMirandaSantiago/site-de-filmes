import { MutableRefObject, useEffect, useRef, useState } from "react"
import { Apiresponse } from "../types/Tendencies"
import {motion} from 'framer-motion'

export const Compiler = ({api} : {api : Apiresponse}) =>{
    
    const carousel: MutableRefObject<HTMLUListElement | null> = useRef(null)
    const [width, setWidth] = useState(0)
    
    useEffect(()=>{
        if (carousel.current) {
            console.log(carousel.current?.scrollWidth - carousel.current?.offsetHeight)
            setWidth((carousel.current?.scrollWidth - carousel.current?.offsetHeight))   
        }
    }, [api.results])

    useEffect(()=>{
        console.log(carousel.current?.scrollWidth)
        console.log(carousel.current?.offsetWidth)
        console.log(width)
    }, [width])
    
    return(
        <div className="border-b border-white my-4 flex">
            <motion.div whileTap={{cursor: 'grabbing'}} className="bg-black cursor-grab">
                <motion.ul ref={carousel} drag="x" 
                dragConstraints={{right: 0, left: -width}} 
                initial={{x: 100}} animate={{x:0}} transition={{duration: 0.8}} 
                className="flex gap-6 items-center py-7 min-width: max-content;">
                    {api.results.map(res =>{
                        return(
                        <li key={res.id} className="w-44 flex min-h-max ">
                            <img className="flex w-4/5 h-4/5 rounded-lg" src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}/>
                        </li>
                        )  
                    })}
                </motion.ul>
            </motion.div>
        </div>
    )
}