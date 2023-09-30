import React, { useEffect, useState } from "react"
import { App } from "../types/typeApp"

export const SpinnerCarousel = ({app} : App) =>{
    const imgs: string[] = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiTRVwoWS6x33H1MizjNz0HY9WPgOe9uJJCyJc8dtrcHOQ7IMxrX3EMEV5WjkREDVPHk&usqp=CAU", 
        "https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg",
        "https://img.freepik.com/fotos-premium/paisagem-magica-majestosa-da-fantasia-com-ilustracao-3d-dos-raios-do-sol-da-cachoeira-do-rio-das-montanhas_598586-1969.jpg"
    ]
    const [index, setIndex] = useState(0)
    useEffect(()=>{
        console.log("rode uma vez")
      const interval =  setInterval(()=>{
            console.log("rodu")
            setIndex((e)=>{return(( e + 1) % imgs.length)})
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    useEffect(()=>{
        
        const event = imgs[index]
        app(event)
    }, [index])

    return (
        <div className="flex flex-col flex-c items-center justify-center m-0">
            <div className="shadow-md shadow-black overflow-hidden h-52 w-56">
                <div id="imgs" className="flex transition-transform duration-500 ease-in-out transform translate-x-0 hover:scale-110">
                    <img className="object-cover min-w-full h-52 w-56" src={imgs[index]} />
                    
                </div>
            </div>
        </div>
    )
}


