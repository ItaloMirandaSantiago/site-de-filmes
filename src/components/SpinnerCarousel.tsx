import React, { useEffect, useState } from "react"
import { App } from "../types/typeApp"

export const SpinnerCarousel = ({app} : App) =>{
    const imgs: string[] = [
        "https://image.tmdb.org/t/p/w500/qx81rP4b4UFcxjabCqfe79F24Z0.jpg",
        "https://image.tmdb.org/t/p/w500/j2Or0w69bpPXrmkE0hpTzw6hzsr.jpg",
        "https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg"
    ]
    const [index, setIndex] = useState(0)
    useEffect(()=>{
      const interval =  setInterval(()=>{
            setIndex((e)=>{return(( e + 1) % imgs.length)})
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    useEffect(()=>{
        
        const event = imgs[index]
        app(event)
    }, [index])
    return (
        <div className="flex justify-center justify-items-center py-5 h-56">
                    <div className=" shadow-md shadow-black overflow-hidden w-5/6 h-5/6 md:rounded-md">
                        <div id="imgs" className="flex transition-transform duration-500 ease-in-out transform translate-x-0 hover:scale-110">
                            <img className="object-cover min-w-full h-48 w-56 lg:h-80" src={imgs[index]} />    
                        </div>
                    </div>
        </div>
    )
}


