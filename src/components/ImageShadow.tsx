export const ImageShadow = () =>{
    return (
        <div className="flex justify-center justify-items-center py-5 h-56">
            <div className=" shadow-md shadow-black overflow-hidden w-5/6 md:rounded-md">
                <div id="imgs" className="flex duration-500 hover:scale-110 h-full">
                    <img className="object-cover w-full h-full  lg:h-80" src="https://i0.wp.com/cromossomonerd.com.br/wp-content/uploads/2018/04/vingadores1068x600.jpg?fit=1068%2C600&ssl=1" 
                    alt="imagem decorativa"
                    />    
                </div>
            </div>
        </div>
    )
}
