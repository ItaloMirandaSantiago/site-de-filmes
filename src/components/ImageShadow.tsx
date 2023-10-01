import React, { useEffect, useState } from "react"

export const SpinnerCarousel = () =>{
    return (
        <div className="flex justify-center justify-items-center py-5 h-56">
            <div className=" shadow-md shadow-black overflow-hidden w-5/6 h-5/6 md:rounded-md">
                <div id="imgs" className="flex transition-transform duration-500 ease-in-out transform translate-x-0 hover:scale-110">
                    <img className="object-cover min-w-full h-48 w-56 lg:h-80" src="https://i0.wp.com/cromossomonerd.com.br/wp-content/uploads/2018/04/vingadores1068x600.jpg?fit=1068%2C600&ssl=1" />    
                </div>
            </div>
        </div>
    )
}
